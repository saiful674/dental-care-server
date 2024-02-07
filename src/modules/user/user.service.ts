import httpStatus from 'http-status';
import mongoose from 'mongoose';
import AppError from '../../errors/AppError';
import { TAdmin } from '../admin/admin.interface';
import Admin from '../admin/admin.model';
import { TDoctor } from '../doctor/doctor.interface';
import Doctor from '../doctor/doctor.model';
import { TPatient } from '../patient/patient.interface';
import Patient from '../patient/patient.model';
import { TUser } from './user.interface';
import User from './user.model';
import {
  generateAdminId,
  generateDoctorId,
  generatePatientId,
} from './user.utils';

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

const createAdminIntoDb = async (password: string, payload: TAdmin) => {
  // genarate admin id
  const patientId = await generateAdminId();
  const userData: TUser = {
    id: patientId,
    email: payload?.email,
    role: 'admin',
    password: password,
  };
  console.log(payload);
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create account!');
    }
    const adminData = { ...payload };
    adminData.user = newUser[0]._id;
    adminData.id = patientId;
    const newDoctor = await Admin.create([adminData], { session });

    if (!newDoctor.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create account!');
    }
    await session.commitTransaction();
    await session.endSession();
    return newDoctor;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

const createDoctorIntoDb = async (password: string, payload: TDoctor) => {
  // genarate doctor id
  const doctorId = await generateDoctorId();
  const userData: TUser = {
    id: doctorId,
    email: payload?.email,
    role: 'doctor',
    password: password,
  };
  console.log(payload);
  const session = await mongoose.startSession();

  try {
    await session.startTransaction();
    const newUser = await User.create([userData], { session });

    if (!newUser.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create account!');
    }
    const doctorData = { ...payload };
    doctorData.user = newUser[0]._id;
    doctorData.id = doctorId;
    const newDoctor = await Doctor.create([doctorData], { session });

    if (!newDoctor.length) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Faild to create account!');
    }
    await session.commitTransaction();
    await session.endSession();
    return newDoctor;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
  }
};

export const userServices = {
  createPatientIntoDb,
  createAdminIntoDb,
  createDoctorIntoDb,
};
