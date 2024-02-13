import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Doctor from '../doctor/doctor.model';
import { TService } from './services.interface';
import { Service } from './services.model';

const createServiceIntoDb = async (payload: TService) => {
  const isDoctorExists = await Doctor.findById(payload.doctorId);
  if (!isDoctorExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Doctor is not found');
  }

  // check if the doctor already have a same service
  const isServiceExists = await Service.findOne({
    doctorId: isDoctorExists._id,
    name: payload.name,
  });
  if (isServiceExists) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You alreadey added ${payload.name} service! please add another service`,
    );
  }

  const result = await Service.create(payload);
  return result;
};

export const servicesService = {
  createServiceIntoDb,
};
