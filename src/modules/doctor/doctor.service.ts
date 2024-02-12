import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import Doctor from './doctor.model';

const getAllDoctorsFromDb = async () => {
  const result = await Doctor.find();
  return result;
};
const getSingleDoctorsFromDb = async (id: string) => {
  const isdoctorExists = await Doctor.findById(id);
  if (!isdoctorExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Doctor not found');
  }
  return isdoctorExists;
};

const deleteDoctorFromDb = async (id: string) => {
  const isDoctorExists = await Doctor.findById(id);
  if (!isDoctorExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Doctor not found');
  }

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const deleteUser = await User.findByIdAndDelete(isDoctorExists.user, {
      session,
    });
    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete doctor');
    }
    const result = await Doctor.findByIdAndDelete(id, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete doctor');
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
  return null;
};

export const doctorServices = {
  getAllDoctorsFromDb,
  getSingleDoctorsFromDb,
  deleteDoctorFromDb,
};
