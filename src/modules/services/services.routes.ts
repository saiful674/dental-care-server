import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { serviceController } from './services.controller';
import { serviceValidationSchema } from './services.validation';

const router = express.Router();

router.post(
  '/create-service',
  validateRequest(serviceValidationSchema.createServiceValidationSchema),
  serviceController.createService,
);

export const serviceRoute = router;
