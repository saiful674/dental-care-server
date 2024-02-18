import { Model } from 'mongoose';

export type TUser = {
  email: string;
  id: string;
  password: string;
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
}
