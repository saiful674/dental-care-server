import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Doctor from '../doctor/doctor.model';
import Appointment from './appoinment.model';
import { TAppointment } from './appointment.interface';

const createAppointmentIntoDb = async (payload: TAppointment) => {
  const isDoctorExists = await Doctor.findById(payload.doctorId);
  if (!isDoctorExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Doctor is not found');
  }

  // check if the doctor already have an appointment in same shift
  const isAppointmentExists = await Appointment.find({
    doctorId: isDoctorExists._id,
  });
  if (isAppointmentExists.length) {
    if (isAppointmentExists.length === 2) {
      throw new AppError(
        httpStatus.BAD_REQUEST,
        'You have already two appointment with "Evening and Morning" shift',
      );
    }
    isAppointmentExists.forEach((item) => {
      if (item.shift === payload.shift) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          `You have already an appointment with ${payload.shift} shift please select another shift`,
        );
      }
    });
  }

  const result = await Appointment.create(payload);
  return result;
};

export const appointmentServices = {
  createAppointmentIntoDb,
};
