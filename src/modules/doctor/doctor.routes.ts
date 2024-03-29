import express from 'express';
import { doctorControllers } from './doctor.controller';
const router = express.Router();

router.get('/', doctorControllers.getAllDoctors);
router.get('/:id', doctorControllers.getSingleDoctor);
router.delete('/:id', doctorControllers.deleteSingleDoctor);

export const doctortRoutes = router;
