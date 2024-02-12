import express from 'express';
import { appointmentControllers } from './appoinment.controller';
const router = express.Router();

router.post('/create-appointment', appointmentControllers.createAppointment);

export const appoinmentRoutes = router;
