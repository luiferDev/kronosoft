import { google } from 'googleapis';

interface CalendarEvent {
  summary: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  attendeeEmail: string;
  attendeeName: string;
}

const calendar = google.calendar('v3');

export async function createCalendarEvent(eventData: CalendarEvent) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: import.meta.env.GOOGLE_CLIENT_EMAIL,
        private_key: import.meta.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const authClient = await auth.getClient();
    google.options({ auth: authClient });

    const event = {
      summary: eventData.summary,
      description: `${eventData.description}\n\nCliente: ${eventData.attendeeName}\nEmail: ${eventData.attendeeEmail}`,
      start: {
        dateTime: eventData.startDateTime,
        timeZone: 'America/Mexico_City',
      },
      end: {
        dateTime: eventData.endDateTime,
        timeZone: 'America/Mexico_City',
      },
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'popup', minutes: 10 },
        ],
      },
    };

    const response = await calendar.events.insert({
      calendarId: import.meta.env.GOOGLE_CALENDAR_ID,
      resource: event,
    });

    return { success: true, eventId: response.data.id };
  } catch (error) {
    console.error('Error creating calendar event:', error);
    return { success: false, error };
  }
}