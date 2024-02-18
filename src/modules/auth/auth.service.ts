import httpStatus from 'http-status';
import config from '../../config';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import { TLogin } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLogin) => {
  console.log(payload);
  const isUserExists = await User.isUserExistsByEmail(payload.email);
  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'User not found!');
  }
  const user = isUserExists;

  if (user.status === 'block') {
    throw new AppError(httpStatus.FORBIDDEN, 'Your account is block!');
  }

  if (user.isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, 'Your account is deleted');
  }

  const isPasswordMatched = await User.isPasswordMatched(
    payload.password,
    user.password,
  );
  if (!isPasswordMatched) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password not match!');
  }

  //create token and sent to the  client

  const jwtPayload = {
    userId: user.id,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return { accessToken };
};

export const authServices = {
  loginUser,
};
