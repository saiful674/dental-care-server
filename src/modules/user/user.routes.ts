import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { patientValidationsSchema } from '../patient/patient.validation';
import { userControllers } from './user.conroller';
const router = express.Router();

router.post(
  '/create-patient',
  validateRequest(patientValidationsSchema.createPatientValidationSchema),
  userControllers.createPatient,
);

export const userRoutes = router;
