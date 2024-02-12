import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import Admin from './admin.model';

const getAllAdminFromDb = async () => {
  const result = await Admin.find();
  return result;
};
const getSingleAdminFromDb = async (id: string) => {
  const isAdminExists = await Admin.findById(id);
  if (!isAdminExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admin not found');
  }
  return isAdminExists;
};

const deleteAdminFromDb = async (id: string) => {
  const isAdminExists = await Admin.findById(id);
  if (!isAdminExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admin not found');
  }

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const deleteUser = await User.findByIdAndDelete(isAdminExists.user, {
      session,
    });
    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete admin');
    }
    const result = await Admin.findByIdAndDelete(id, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete admin');
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
  return null;
};
export const adminServices = {
  getAllAdminFromDb,
  getSingleAdminFromDb,
  deleteAdminFromDb,
};
