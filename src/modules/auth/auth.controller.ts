import catchAsync from '../../utils/catchAsync';
import { authServices } from './auth.service';

const loginUser = catchAsync(async (req, res) => {
  const result = await authServices.loginUser(req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Login successful',
    data: result,
  });
});

const changePassword = catchAsync(async (req, res) => {
  const { ...passwordData } = req.body;

  const result = await authServices.changePassword(req.user, passwordData);

  res.status(200).json({
    success: true,
    message: 'Password is changed succesfully!',
    data: result,
  });
});
const forgotPassword = catchAsync(async (req, res) => {
  const { email } = req.user;

  const result = await authServices.forgetPassword(email);

  res.status(200).json({
    success: true,
    message: 'Password reset link send to your email',
    data: result,
  });
});

const resetPassword = catchAsync(async (req, res) => {
  const token = req.headers.authorization;
  const result = await authServices.resetPassword(req.body, token as string);

  res.status(200).json({
    success: true,
    message: 'Password reset successful',
    data: result,
  });
});

export const authControllers = {
  loginUser,
  changePassword,
  forgotPassword,
  resetPassword,
};
