import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ContactForm } from '@/features/contact/components/ContactForm';
import type { ContactFormTranslations } from '@/features/contact/type';
import type { LanguageCode } from '@/i18n/ui';

// Mock toast from sonner
vi.mock('sonner', () => ({
  toast: {
    success: vi.fn(),
    error: vi.fn(),
  },
}));

// Create a mock fetch function
const mockFetch = vi
  .fn()
  .mockImplementation(() =>
    Promise.resolve({ ok: true, json: async () => ({}) })
  );

// Replace global fetch with mock
Object.defineProperty(globalThis, 'fetch', {
  writable: true,
  value: mockFetch,
});

// Spanish translations (default language)
const esTranslations: ContactFormTranslations = {
  firstNameLabel: 'Nombre',
  lastNameLabel: 'Apellido',
  emailLabel: 'Correo electrónico',
  messageLabel: 'Mensaje',
  firstNamePlaceholder: 'Tu nombre',
  lastNamePlaceholder: 'Tu apellido',
  emailPlaceholder: 'tu@email.com',
  messagePlaceholder: 'Escribe tu mensaje aquí...',
  sendButtonLabel: 'Enviar mensaje',
  toastSuccessMessageSent: '¡Mensaje enviado con éxito!',
  toastErrorFailedToSend: 'Error al enviar el mensaje',
  toastErrorUnexpected: 'Ocurrió un error inesperado',
  toastErrorDetails: 'Detalles:',
  toastErrorValidationFailed: 'La validación falló',
};

// English translations
const enTranslations: ContactFormTranslations = {
  firstNameLabel: 'First Name',
  lastNameLabel: 'Last Name',
  emailLabel: 'Email',
  messageLabel: 'Message',
  firstNamePlaceholder: 'Your first name',
  lastNamePlaceholder: 'Your last name',
  emailPlaceholder: 'your@email.com',
  messagePlaceholder: 'Write your message here...',
  sendButtonLabel: 'Send message',
  toastSuccessMessageSent: 'Message sent successfully!',
  toastErrorFailedToSend: 'Failed to send message',
  toastErrorUnexpected: 'An unexpected error occurred',
  toastErrorDetails: 'Details:',
  toastErrorValidationFailed: 'Validation failed',
};

const renderComponent = ({
  lang = 'es' as LanguageCode,
  formTranslations = esTranslations,
  onSubmitSuccess,
}: {
  lang?: LanguageCode;
  formTranslations?: ContactFormTranslations;
  onSubmitSuccess?: () => void;
} = {}) => {
  return render(
    <ContactForm
      lang={lang}
      formTranslations={formTranslations}
      onSubmitSuccess={onSubmitSuccess}
    />
  );
};

describe('ContactForm', () => {
  let onSubmitSuccess: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();
    onSubmitSuccess = vi.fn();
    mockFetch.mockClear();
  });

  describe('Rendering', () => {
    it('renders all form fields with correct labels in Spanish', () => {
      renderComponent();

      // Check labels
      expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/apellido/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/correo/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument();

      // Check placeholders
      expect(screen.getByPlaceholderText(/tu nombre/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/tu apellido/i)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/tu@email/i)).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/escribe tu mensaje/i)
      ).toBeInTheDocument();

      // Check submit button
      expect(
        screen.getByRole('button', { name: /enviar mensaje/i })
      ).toBeInTheDocument();
    });

    it('renders all form fields with correct labels in English', () => {
      renderComponent({ lang: 'en', formTranslations: enTranslations });

      // Check labels
      expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/message/i)).toBeInTheDocument();

      // Check placeholders
      expect(
        screen.getByPlaceholderText(/your first name/i)
      ).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/your last name/i)
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/your@email/i)).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText(/write your message/i)
      ).toBeInTheDocument();
    });
  });

  describe('Validation', () => {
    it('shows validation errors for empty required fields on submit', async () => {
      renderComponent();

      const submitButton = screen.getByRole('button', {
        name: /enviar mensaje/i,
      });
      await userEvent.click(submitButton);

      await waitFor(() => {
        // Check for required field errors (at least one should appear)
        // Zod shows "Debe contener al menos X caracteres" for empty fields
        const errorMessages = screen.getAllByText(/debe contener al menos/i);
        expect(errorMessages.length).toBeGreaterThan(0);
      });
    });

    it('shows validation error for invalid email on blur', async () => {
      renderComponent();

      const emailInput = screen.getByLabelText(/correo/i);
      await userEvent.type(emailInput, 'invalid-email');
      await userEvent.click(document.body); // Trigger blur by clicking outside

      await waitFor(() => {
        expect(
          screen.getByText(/dirección de email inválida/i)
        ).toBeInTheDocument();
      });
    });

    it('shows validation error for firstName too short', async () => {
      renderComponent();

      const firstNameInput = screen.getByLabelText(/nombre/i);
      await userEvent.type(firstNameInput, 'A'); // Less than 2 characters
      await userEvent.click(document.body);

      await waitFor(() => {
        expect(
          screen.getByText(/debe contener al menos 2 caracteres/i)
        ).toBeInTheDocument();
      });
    });

    it('shows validation error for message too short', async () => {
      renderComponent();

      const messageInput = screen.getByLabelText(/mensaje/i);
      await userEvent.type(messageInput, 'Short'); // Less than 10 characters
      await userEvent.click(document.body);

      await waitFor(() => {
        expect(
          screen.getByText(/debe contener al menos 10 caracteres/i)
        ).toBeInTheDocument();
      });
    });

    it('shows validation error for message too long', async () => {
      renderComponent();

      const messageInput = screen.getByLabelText(/mensaje/i);
      // Type more than 500 characters
      await userEvent.type(messageInput, 'A'.repeat(501));
      await userEvent.click(document.body);

      await waitFor(() => {
        expect(
          screen.getByText(/no debe exceder 500 caracteres/i)
        ).toBeInTheDocument();
      });
    });
  });

  describe('Submission Flow', () => {
    it('shows validation error for firstName too short', async () => {
      renderComponent();

      const firstNameInput = screen.getByLabelText(/nombre/i);
      await userEvent.type(firstNameInput, 'A'); // Less than 2 characters
      await userEvent.click(document.body);

      await waitFor(() => {
        expect(
          screen.getByText(/debe contener al menos 2 caracteres/i)
        ).toBeInTheDocument();
      });
    });

    it('shows validation error for message too short', async () => {
      renderComponent();

      const messageInput = screen.getByLabelText(/mensaje/i);
      await userEvent.type(messageInput, 'Short'); // Less than 10 characters
      await userEvent.click(document.body);

      await waitFor(() => {
        expect(
          screen.getByText(/debe contener al menos 10 caracteres/i)
        ).toBeInTheDocument();
      });
    });

    it('shows validation error for message too long', async () => {
      renderComponent();

      const messageInput = screen.getByLabelText(/mensaje/i);
      // Type more than 500 characters
      await userEvent.type(messageInput, 'A'.repeat(501));
      await userEvent.click(document.body);

      await waitFor(() => {
        expect(
          screen.getByText(/no debe exceder 500 caracteres/i)
        ).toBeInTheDocument();
      });
    });

    describe('Submission Flow', () => {
      const fillValidForm = async () => {
        await userEvent.type(screen.getByLabelText(/nombre/i), 'Juan');
        await userEvent.type(screen.getByLabelText(/apellido/i), 'Pérez');
        await userEvent.type(
          screen.getByLabelText(/correo/i),
          'juan@example.com'
        );
        await userEvent.type(
          screen.getByLabelText(/mensaje/i),
          'Este es un mensaje de prueba válido'
        );
      };

      it('submits successfully and shows success toast', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            status: 'success',
            message: '¡Mensaje enviado!',
          }),
        } as unknown as Response);

        renderComponent({ onSubmitSuccess });

        await fillValidForm();

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });
        await userEvent.click(submitButton);

        await waitFor(() => {
          expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: 'Juan',
              lastName: 'Pérez',
              email: 'juan@example.com',
              message: 'Este es un mensaje de prueba válido',
              lang: 'es',
            }),
          });
        });

        // Check success toast was called
        const { toast } = await import('sonner');
        await waitFor(() => {
          expect(toast.success).toHaveBeenCalled();
        });

        // Check onSubmitSuccess callback was called
        await waitFor(() => {
          expect(onSubmitSuccess).toHaveBeenCalled();
        });
      });

      it('submits with correct lang parameter (English)', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ status: 'success', message: 'Message sent!' }),
        } as unknown as Response);

        renderComponent({ lang: 'en', formTranslations: enTranslations });

        await userEvent.type(screen.getByLabelText(/first name/i), 'John');
        await userEvent.type(screen.getByLabelText(/last name/i), 'Doe');
        await userEvent.type(
          screen.getByLabelText(/email/i),
          'john@example.com'
        );
        await userEvent.type(
          screen.getByLabelText(/message/i),
          'This is a test message'
        );

        const submitButton = screen.getByRole('button', {
          name: /send message/i,
        });
        await userEvent.click(submitButton);

        await waitFor(() => {
          expect(mockFetch).toHaveBeenCalledWith('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              firstName: 'John',
              lastName: 'Doe',
              email: 'john@example.com',
              message: 'This is a test message',
              lang: 'en',
            }),
          });
        });
      });

      it('shows error toast on server error response', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({
            status: 'error',
            message: 'Error del servidor',
          }),
        } as unknown as Response);

        renderComponent();

        await fillValidForm();

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });
        await userEvent.click(submitButton);

        await waitFor(async () => {
          const { toast } = await import('sonner');
          expect(toast.error).toHaveBeenCalled();
        });
      });

      it('shows error toast on network error (catch block)', async () => {
        mockFetch.mockRejectedValueOnce(new Error('Network error'));

        renderComponent();

        await fillValidForm();

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });
        await userEvent.click(submitButton);

        await waitFor(async () => {
          const { toast } = await import('sonner');
          expect(toast.error).toHaveBeenCalled();
        });
      });

      it('resets form after successful submission', async () => {
        mockFetch.mockResolvedValueOnce({
          ok: true,
          json: async () => ({ status: 'success', message: '¡Éxito!' }),
        } as unknown as Response);

        renderComponent();

        await fillValidForm();

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });
        await userEvent.click(submitButton);

        await waitFor(() => {
          // After reset, fields should be empty
          const firstNameInput = screen.getByLabelText(
            /nombre/i
          ) as HTMLInputElement;
          expect(firstNameInput.value).toBe('');
        });
      });
    });

    describe('Loading State', () => {
      it('disables submit button while submitting', async () => {
        let resolveFetch: (value: unknown) => void;
        const fetchPromise = new Promise<unknown>((resolve) => {
          resolveFetch = resolve;
        });
        mockFetch.mockReturnValueOnce(
          fetchPromise as unknown as ReturnType<typeof fetch>
        );

        renderComponent();

        // Fill form
        await userEvent.type(screen.getByLabelText(/nombre/i), 'Juan');
        await userEvent.type(screen.getByLabelText(/apellido/i), 'Pérez');
        await userEvent.type(
          screen.getByLabelText(/correo/i),
          'juan@example.com'
        );
        await userEvent.type(
          screen.getByLabelText(/mensaje/i),
          'Mensaje de prueba válido'
        );

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });
        await userEvent.click(submitButton);

        // Button should be disabled
        expect(submitButton).toBeDisabled();

        // Resolve fetch
        resolveFetch!({
          ok: true,
          json: async () => ({ status: 'success', message: 'OK' }),
        });

        // Button should be enabled again
        await waitFor(() => {
          expect(submitButton).not.toBeDisabled();
        });
      });

      it('shows Loader2 icon while submitting', async () => {
        let resolveFetch: (value: unknown) => void;
        const fetchPromise = new Promise<unknown>((resolve) => {
          resolveFetch = resolve;
        });
        mockFetch.mockReturnValueOnce(
          fetchPromise as unknown as ReturnType<typeof fetch>
        );

        renderComponent();

        // Fill form
        await userEvent.type(screen.getByLabelText(/nombre/i), 'Juan');
        await userEvent.type(screen.getByLabelText(/apellido/i), 'Pérez');
        await userEvent.type(
          screen.getByLabelText(/correo/i),
          'juan@example.com'
        );
        await userEvent.type(
          screen.getByLabelText(/mensaje/i),
          'Mensaje de prueba válido'
        );

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });
        await userEvent.click(submitButton);

        // Check for Loader2 (spin animation class indicates it's the loader)
        const loader = document.querySelector('.animate-spin');
        expect(loader).toBeInTheDocument();

        // Resolve fetch
        resolveFetch!({
          ok: true,
          json: async () => ({ status: 'success', message: 'OK' }),
        });
      });
    });

    describe('Duplicate Submission Prevention', () => {
      it('does not trigger second fetch while submission is pending', async () => {
        let resolveFetch: (value: unknown) => void;
        const fetchPromise = new Promise<unknown>((resolve) => {
          resolveFetch = resolve;
        });
        mockFetch.mockReturnValueOnce(
          fetchPromise as unknown as ReturnType<typeof fetch>
        );

        renderComponent();

        // Fill form
        await userEvent.type(screen.getByLabelText(/nombre/i), 'Juan');
        await userEvent.type(screen.getByLabelText(/apellido/i), 'Pérez');
        await userEvent.type(
          screen.getByLabelText(/correo/i),
          'juan@example.com'
        );
        await userEvent.type(
          screen.getByLabelText(/mensaje/i),
          'Mensaje de prueba válido'
        );

        const submitButton = screen.getByRole('button', {
          name: /enviar mensaje/i,
        });

        // Click first time
        await userEvent.click(submitButton);
        expect(mockFetch).toHaveBeenCalledTimes(1);

        // Try to click second time while pending
        await userEvent.click(submitButton);
        await userEvent.click(submitButton);

        // Still only one call
        expect(mockFetch).toHaveBeenCalledTimes(1);

        // Resolve fetch
        resolveFetch!({
          ok: true,
          json: async () => ({ status: 'success', message: 'OK' }),
        });
      });
    });
  });
});
