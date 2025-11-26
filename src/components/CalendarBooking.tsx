import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User, Mail, MessageSquare } from 'lucide-react';
import { toast } from 'sonner';

const bookingSchema = z.object({
  firstName: z.string().min(2, 'Nombre requerido'),
  lastName: z.string().min(2, 'Apellido requerido'),
  email: z.string().email('Email inválido'),
  date: z.string().min(1, 'Fecha requerida'),
  time: z.string().min(1, 'Hora requerida'),
  duration: z.string().min(1, 'Duración requerida'),
  subject: z.string().min(5, 'Asunto requerido'),
  message: z.string().min(10, 'Mensaje muy corto'),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export function CalendarBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      date: '',
      time: '',
      duration: '60',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      const startDateTime = new Date(`${data.date}T${data.time}`).toISOString();
      const endDateTime = new Date(
        new Date(startDateTime).getTime() + parseInt(data.duration) * 60000
      ).toISOString();

      const response = await fetch('/api/calendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          summary: data.subject,
          description: data.message,
          startDateTime,
          endDateTime,
          attendeeEmail: data.email,
          attendeeName: `${data.firstName} ${data.lastName}`,
          firstName: data.firstName,
          lastName: data.lastName,
          message: data.message,
        }),
      });

      const result = await response.json();

      if (result.status === 'success') {
        toast.success('¡Cita agendada exitosamente! Recibirás un email de confirmación.');
        form.reset();
      } else {
        toast.error(result.message || 'Error al agendar la cita');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error inesperado al agendar la cita');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-card rounded-lg shadow">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Agendar Cita</h2>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">
              <User className="inline h-4 w-4 mr-1" />
              Nombre
            </Label>
            <Input
              id="firstName"
              {...form.register('firstName')}
              placeholder="Tu nombre"
            />
            {form.formState.errors.firstName && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.firstName.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="lastName">Apellido</Label>
            <Input
              id="lastName"
              {...form.register('lastName')}
              placeholder="Tu apellido"
            />
            {form.formState.errors.lastName && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Label htmlFor="email">
            <Mail className="inline h-4 w-4 mr-1" />
            Email
          </Label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            placeholder="tu@email.com"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="date">Fecha</Label>
            <Input
              id="date"
              type="date"
              {...form.register('date')}
              min={new Date().toISOString().split('T')[0]}
            />
            {form.formState.errors.date && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.date.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="time">
              <Clock className="inline h-4 w-4 mr-1" />
              Hora
            </Label>
            <Input
              id="time"
              type="time"
              {...form.register('time')}
            />
            {form.formState.errors.time && (
              <p className="text-sm text-red-500 mt-1">
                {form.formState.errors.time.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="duration">Duración (min)</Label>
            <select
              id="duration"
              {...form.register('duration')}
              className="w-full px-3 py-2 border border-input bg-background rounded-md"
            >
              <option value="30">30 minutos</option>
              <option value="60">1 hora</option>
              <option value="90">1.5 horas</option>
              <option value="120">2 horas</option>
            </select>
          </div>
        </div>

        <div>
          <Label htmlFor="subject">Asunto</Label>
          <Input
            id="subject"
            {...form.register('subject')}
            placeholder="Motivo de la cita"
          />
          {form.formState.errors.subject && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.subject.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="message">
            <MessageSquare className="inline h-4 w-4 mr-1" />
            Mensaje
          </Label>
          <Textarea
            id="message"
            {...form.register('message')}
            placeholder="Describe brevemente lo que necesitas..."
            rows={4}
          />
          {form.formState.errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {form.formState.errors.message.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Clock className="mr-2 h-4 w-4 animate-spin" />
              Agendando...
            </>
          ) : (
            <>
              <Calendar className="mr-2 h-4 w-4" />
              Agendar Cita
            </>
          )}
        </Button>
      </form>
    </div>
  );
}