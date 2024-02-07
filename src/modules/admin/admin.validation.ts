import { z } from 'zod';
import { bloodGroup } from '../../constant/global.constant';

const createAdminValidationSchema = z.object({
  body: z.object({
    password: z
      .string({ required_error: 'Password is required' })
      .min(8, { message: 'Password must be 8 characters' }),
    admin: z.object({
      firstName: z.string().min(1, { message: 'First name is required' }),
      lastName: z.string().min(1, { message: 'Last name is required' }),
      designation: z.string().min(1, { message: 'Designation is required' }),
      dateOfBirth: z.string({ required_error: 'Date of birth is required' }),
      gender: z.enum(['Male', 'Female', 'Other']).or(
        z.string().min(1, {
          message: 'Gender is required and must be Male, Female, or Other',
        }),
      ),
      bloodGroup: z
        .enum([...bloodGroup] as [string])
        .or(z.string().min(1, { message: 'Blood group is required' })),
      email: z.string(),

      contactNumber: z
        .string()
        .min(1, { message: 'Contact number is required' }),
      emergencyContactNumber: z
        .string()
        .min(1, { message: 'Emergency contact number is required' }),
      address: z.string().min(1, { message: 'Address is required' }),
    }),
  }),
});

export const adminValidationsSchema = {
  createAdminValidationSchema,
};
