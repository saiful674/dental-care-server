import express from 'express';
import auth from '../../middlewares/auth';
import validateRequest from '../../middlewares/validateRequest';
import { USER_ROLE } from '../user/user.constant';
import { authControllers } from './auth.controller';
import {
  changePasswordValidationSchema,
  loginValidationSchema,
} from './auth.validation';

const router = express.Router();

router.post(
  '/login',
  validateRequest(loginValidationSchema),
  authControllers.loginUser,
);

router.post(
  '/change-password',
  auth(USER_ROLE.admin, USER_ROLE.doctor, USER_ROLE.patient),
  validateRequest(changePasswordValidationSchema),
  authControllers.changePassword,
);
router.post(
  '/forgot-password',
  auth(USER_ROLE.admin, USER_ROLE.doctor, USER_ROLE.patient),
  authControllers.forgotPassword,
);

export const authRoutes = router;
