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
router.get('/', appointmentControllers.getAllAppointment);
router.get('/:id', appointmentControllers.getSingleAppointment);
router.patch(
  '/:id',
  validateRequest(
    appointmentValidationSchema.updateAppointmentValidationSchema,
  ),
  appointmentControllers.updateSingleAppointment,
);
router.delete('/:id', appointmentControllers.deleteSingleAppointment);

export const appoinmentRoutes = router;
