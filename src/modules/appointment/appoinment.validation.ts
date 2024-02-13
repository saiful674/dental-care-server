import { z } from 'zod';
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const createAppointmentValidationSchema = z.object({
  body: z.object({
    doctorId: z.string().min(1, { message: 'Doctor ID is required' }),
    dayOfWeek: z.enum(
      [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      { required_error: 'Day of the week is required' },
    ),
    startTime: z
      .string()
      .regex(timeRegex, { message: 'Start time must be in the HH:mm format' }),
    endTime: z
      .string()
      .regex(timeRegex, { message: 'End time must be in the HH:mm format' }),
    shift: z.enum(['Morning', 'Evening'], {
      required_error:
        'Shift is required  and it will be eighter "Morning" or "Evening"',
    }),
    fee: z.number().min(0, { message: 'Fee must be a positive number' }),
    NumberOfPatientPerDay: z
      .number()
      .min(1, { message: 'Number of patients per day must be at least 1' }),
    durationOfSinglePatientVisit: z.number().min(1, {
      message: 'Duration of single patient visit must be at least 1 minute',
    }),
    isAvailable: z.boolean().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const appointmentValidationSchema = {
  createAppointmentValidationSchema,
};
