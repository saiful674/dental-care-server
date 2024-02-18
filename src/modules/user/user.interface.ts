import { Model } from 'mongoose';
import { USER_ROLE } from './user.constant';

export type TUser = {
  email: string;
  id: string;
  password: string;
  passwordChangedAt?: Date;
  role: 'patient' | 'doctor' | 'admin';
  status?: 'in-progress' | 'block';
  isDeleted?: boolean;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if the user exist
  isUserExistsByEmail(email: string): Promise<TUser>;
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}

export type TUserRole = keyof typeof USER_ROLE;
