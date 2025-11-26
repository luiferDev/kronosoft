import type { APIRoute } from 'astro';
import { createCalendarEvent } from '@/lib/calendar';
import { sendContactEmail } from '@/lib/email';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { 
      summary, 
      description, 
      startDateTime, 
      endDateTime, 
      attendeeEmail, 
      attendeeName,
      firstName,
      lastName,
      message 
    } = await request.json();

    // Crear evento en Google Calendar
    const calendarResult = await createCalendarEvent({
      summary,
      description,
      startDateTime,
      endDateTime,
      attendeeEmail,
      attendeeName,
    });

    if (calendarResult.success) {
      // Enviar email de confirmación
      await sendContactEmail({
        firstName,
        lastName,
        email: attendeeEmail,
        message,
        appointmentDate: new Date(startDateTime).toLocaleString('es-MX', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        appointmentSubject: summary,
      });

      return new Response(
        JSON.stringify({
          status: 'success',
          message: 'Cita creada exitosamente',
          eventId: calendarResult.eventId,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({
          status: 'error',
          message: 'Error al crear la cita',
          error: calendarResult.error,
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  } catch (error) {
    console.error('Error in calendar API:', error);
    return new Response(
      JSON.stringify({
        status: 'error',
        message: 'Error del servidor',
        error: error instanceof Error ? error.message : 'Unknown error',
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};