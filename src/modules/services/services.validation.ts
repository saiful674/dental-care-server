import z from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    doctorId: z.string({ required_error: 'Doctor ID is required' }),
    name: z
      .string({ required_error: 'Service name is required' })
      .min(3, 'Service name must be at least 3 characters long.')
      .max(255, 'Service name cannot exceed 255 characters.')
      .trim(),
    description: z
      .string({ required_error: 'Service description is required' })
      .min(10, 'Service description must be at least 10 characters long.')
      .max(1024, 'Service description cannot exceed 1024 characters.')
      .trim(),
    imgUrl: z.string({ required_error: 'Image url is required' }),
    fee: z
      .number({ required_error: 'Fee is required' })
      .nonnegative()
      .min(0, 'Service fee cannot be negative.'),
  }),
});

export const serviceValidationSchema = {
  createServiceValidationSchema,
};
