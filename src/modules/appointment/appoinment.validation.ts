import { z } from 'zod';
const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;

const createAppointmentValidationSchema = z.object({
  body: z.object({
    doctorId: z.string().min(1, { message: 'Doctor ID is required' }),
    dayOfWeek: z
      .array(
        z.enum([
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ]),
      )
      .min(1, { message: 'At least one day of the week is required' })
      .max(7, { message: 'Maximum seven days of the week are allowed' }),
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

const updateAppointmentValidationSchema = z.object({
  body: z.object({
    dayOfWeek: z
      .array(
        z.enum([
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ]),
      )
      .min(1, { message: 'At least one day of the week is required' })
      .max(7, { message: 'Maximum seven days of the week are allowed' })
      .optional(),
    startTime: z
      .string()
      .regex(timeRegex, { message: 'Start time must be in the HH:mm format' })
      .optional(),
    endTime: z
      .string()
      .regex(timeRegex, { message: 'End time must be in the HH:mm format' })
      .optional(),
    fee: z
      .number()
      .min(0, { message: 'Fee must be a positive number' })
      .optional(),
    NumberOfPatientPerDay: z
      .number()
      .min(1, { message: 'Number of patients per day must be at least 1' })
      .optional(),
    durationOfSinglePatientVisit: z
      .number()
      .min(1, {
        message: 'Duration of single patient visit must be at least 1 minute',
      })
      .optional(),
  }),
});

export const appointmentValidationSchema = {
  createAppointmentValidationSchema,
  updateAppointmentValidationSchema,
};
