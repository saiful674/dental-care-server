import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import { TLogin } from './auth.interface';

const loginUser = async (payload: TLogin) => {
  console.log(payload);
  const isUserExists = await User.isUserExistsByEmail(payload.email);
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    isUserExists.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password not match!');
  }
  console.log(isUserExists);
  return [];
};

export const authServices = {
  loginUser,
};
