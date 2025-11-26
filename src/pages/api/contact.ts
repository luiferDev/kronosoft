import type { APIRoute } from 'astro';

export const prerender = false;

import { contactFormSchema as ContactFormSchema } from '@/features/contact/type';
import { sendContactEmail } from '@/lib/email';
import { ui, type LanguageCode } from '@/i18n/ui';
import type {
  ContactFormTranslations,
  ContactFormApiResponse,
} from '@/features/contact/type';

// Environment variables for a real email service would be typically accessed here.
// For example:
// const MY_EMAIL_SERVICE_API_KEY = import.meta.env.MY_EMAIL_SERVICE_API_KEY;
// const EMAIL_RECEIVER_ADDRESS = import.meta.env.EMAIL_RECEIVER_ADDRESS;
// const EMAIL_SENDER_ADDRESS = import.meta.env.EMAIL_SENDER_ADDRESS;
//
// Ensure these are defined in your .env file if you implement a real email service.
// For this template, we will simulate the email sending.

export const POST: APIRoute = async ({ request }) => {
  let lang: LanguageCode = 'en'; // Default language
  let currentTranslations: ContactFormTranslations = ui[lang]
    .contactPage as ContactFormTranslations; // Default translations
  // In a real implementation, you might check if your email service is configured:
  // if (!MY_EMAIL_SERVICE_API_KEY || !EMAIL_RECEIVER_ADDRESS || !EMAIL_SENDER_ADDRESS) {
  //   return new Response(
  //     JSON.stringify({
  //       message:
  //         'Server configuration error: Email service not properly configured.',
  //     }),
  //     { status: 500, headers: { 'Content-Type': 'application/json' } }
  //   );
  // }

  let formDataForValidation;
  try {
    const requestBody = await request.json();
    const requestLang = requestBody.lang as LanguageCode | undefined;
    if (requestLang && ui[requestLang]) {
      lang = requestLang;
      currentTranslations = ui[lang].contactPage as ContactFormTranslations;
    }
    // Separate formData for Zod validation (without lang property)
    const { lang: _lang, ...restOfBody } = requestBody;
    formDataForValidation = restOfBody;
  } catch (error) {
    // Use default (English) translations if JSON parsing fails or lang is not available
    const errorResponse: ContactFormApiResponse = {
      status: 'error',
      message: currentTranslations.toastErrorUnexpected,
      error: 'Invalid JSON input',
    };
    return new Response(JSON.stringify(errorResponse), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const validationResult = ContactFormSchema.safeParse(formDataForValidation);

  if (!validationResult.success) {
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorValidationFailed,
        errors: validationResult.error.flatten().fieldErrors,
      } as ContactFormApiResponse),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const { firstName, lastName, email, message } = validationResult.data;

  try {
    const emailResult = await sendContactEmail({
      firstName,
      lastName,
      email,
      message,
    });

    if (emailResult.success) {
      return new Response(
        JSON.stringify({
          status: 'success',
          message: currentTranslations.toastSuccessMessageSent,
        } as ContactFormApiResponse),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: currentTranslations.toastErrorFailedToSend,
          error: 'Failed to send email',
        } as ContactFormApiResponse),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: currentTranslations.toastErrorUnexpected,
        error: 'Server error',
      } as ContactFormApiResponse),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
