import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Doctor from '../doctor/doctor.model';
import Appointment from './appoinment.model';
import { TAppointment } from './appoinment.validation';

const createAppointmentIntoDb = async (payload: TAppointment) => {
  const isDoctorExists = await Doctor.findById(payload.doctorId);
  if (!isDoctorExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Doctor is not found');
  }
  const result = await Appointment.create(payload);
  return result;
};

export const appointmentServices = {
  createAppointmentIntoDb,
};
