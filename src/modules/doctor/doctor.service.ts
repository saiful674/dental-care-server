import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
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

export const doctorServices = {
  getAllDoctorsFromDb,
  getSingleDoctorsFromDb,
};
