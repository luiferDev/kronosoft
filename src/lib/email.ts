import nodemailer from 'nodemailer';

interface EmailData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  appointmentDate?: string;
  appointmentSubject?: string;
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: import.meta.env.EMAIL_USER,
    pass: import.meta.env.EMAIL_PASS,
  },
});

export async function sendContactEmail(data: EmailData) {
  const { firstName, lastName, email, message, appointmentDate, appointmentSubject } = data;

  const isAppointment = appointmentDate && appointmentSubject;
  
  // Email al cliente
  const clientEmailOptions = {
    from: import.meta.env.EMAIL_USER,
    to: email,
    subject: isAppointment ? `Confirmación de cita - ${appointmentSubject}` : 'Confirmación de contacto - KronoSoft',
    html: `
      <h2>${isAppointment ? '¡Cita confirmada!' : '¡Gracias por contactarnos!'}</h2>
      <p>Hola ${firstName} ${lastName},</p>
      ${isAppointment ? `
        <p>Tu cita ha sido confirmada para:</p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
          <p><strong>📅 Fecha:</strong> ${appointmentDate}</p>
          <p><strong>📋 Asunto:</strong> ${appointmentSubject}</p>
        </div>
        <p><strong>Detalles adicionales:</strong></p>
        <p>${message}</p>
      ` : `
        <p>Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.</p>
        <p><strong>Tu mensaje:</strong></p>
        <p>${message}</p>
      `}
      <br>
      <p>Saludos,<br>El equipo de KronoSoft</p>
    `,
  };

  // Email para ti
  const adminEmailOptions = {
    from: import.meta.env.EMAIL_USER,
    to: import.meta.env.CONTACT_FORM_TO_EMAIL,
    subject: isAppointment ? `Nueva cita agendada - ${firstName} ${lastName}` : `Nuevo mensaje de contacto de ${firstName} ${lastName}`,
    html: `
      <h2>${isAppointment ? 'Nueva cita agendada' : 'Nuevo mensaje de contacto'}</h2>
      <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${isAppointment ? `
        <p><strong>Fecha de la cita:</strong> ${appointmentDate}</p>
        <p><strong>Asunto:</strong> ${appointmentSubject}</p>
      ` : ''}
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(clientEmailOptions);
    await transporter.sendMail(adminEmailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
}