import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { authControllers } from './auth.controller';
import { loginValidationSchema } from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(loginValidationSchema),
  authControllers.loginUser,
);

export const authRoutes = router;
