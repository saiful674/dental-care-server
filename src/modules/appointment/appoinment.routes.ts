import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { appointmentControllers } from './appoinment.controller';
import { appointmentValidationSchema } from './appoinment.validation';
const router = express.Router();

router.post(
  '/create-appointment',
  validateRequest(
    appointmentValidationSchema.createAppointmentValidationSchema,
  ),
  appointmentControllers.createAppointment,
);

export const appoinmentRoutes = router;
