import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import User from '../user/user.model';
import Patient from './patient.model';

const getAllPatientsFromDb = async () => {
  const result = await Patient.find();
  return result;
};
const getSinglePatientsFromDb = async (id: string) => {
  const isPatientExists = await Patient.findById(id);
  if (!isPatientExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Patient not found');
  }
  return isPatientExists;
};

const deletePatientFromDb = async (id: string) => {
  const isPatientExists = await Patient.findById(id);
  if (!isPatientExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Patient not found');
  }

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const deleteUser = await User.findByIdAndDelete(isPatientExists.user, {
      session,
    });
    if (!deleteUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete patient');
    }
    const result = await Patient.findByIdAndDelete(id, { session });
    if (!result) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to delete patient');
    }
    await session.commitTransaction();
    await session.endSession();
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
  return null;
};
export const patientServices = {
  getAllPatientsFromDb,
  getSinglePatientsFromDb,
  deletePatientFromDb,
};
