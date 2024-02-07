import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { adminValidationsSchema } from '../admin/admin.validation';
import { doctorValidationsSchema } from '../doctor/doctor.validation';
import { patientValidationsSchema } from '../patient/patient.validation';
import { userControllers } from './user.conroller';
const router = express.Router();

router.post(
  '/create-patient',
  validateRequest(patientValidationsSchema.createPatientValidationSchema),
  userControllers.createPatient,
);

router.post(
  '/create-admin',
  validateRequest(adminValidationsSchema.createAdminValidationSchema),
  userControllers.createAdmin,
);

router.post(
  '/create-doctor',
  validateRequest(doctorValidationsSchema.createDoctorValidationSchema),
  userControllers.createDoctor,
);
export const userRoutes = router;
