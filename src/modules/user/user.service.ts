import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import { TPatient } from '../patient/patient.interface';
import Patient from '../patient/patient.model';
import { TUser } from './user.interface';
import User from './user.model';
import { generatePatientId } from './user.utils';

const createPatientIntoDb = async (password: string, payload: TPatient) => {
  const patientId = await generatePatientId();
  const userData: TUser = {
    id: patientId,
    email: payload.email,
    role: 'patient',
    password: password,
  };

  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create account!');
    }
    const patientData = { ...payload };
    patientData.user = newUser[0]._id;
    patientData.id = patientId;
    const newPatient = await Patient.create([patientData], { session });

    if (!newPatient.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create account!');
    }
    await session.commitTransaction();
    await session.endSession();
    return newPatient;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  createPatientIntoDb,
};
