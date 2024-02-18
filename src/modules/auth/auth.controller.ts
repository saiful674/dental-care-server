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

export const authControllers = {
  loginUser,
};
