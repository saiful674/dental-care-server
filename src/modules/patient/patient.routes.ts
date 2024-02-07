import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { patientControllers } from './patient.controller';
import { patientValidationsSchema } from './patient.validation';
const router = express.Router();

router.post(
  '/create-patient',

  validateRequest(patientValidationsSchema.createPatientValidationSchema),
  patientControllers.createPatient,
);

export const patientRoutes = router;
