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

const getAllServicesFromDb = async () => {
  const result = await Service.find();
  return result;
};

const getAllServicesByDoctorIdFromDb = async (id: string) => {
  const isDoctorExists = await Doctor.findById(id);
  if (!isDoctorExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Doctor is not found');
  }

  const result = await Service.find({ doctorId: id });
  return result;
};

const getSingleServiceFromDb = async (id: string) => {
  const isServiceExists = await Service.findById(id);
  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service is not found');
  }

  return isServiceExists;
};

const updateServiceIntoDb = async (id: string, payload: Partial<TService>) => {
  const isServiceExists = await Service.findById(id);
  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service is not found');
  }

  const result = await Service.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteServiceIntoDb = async (id: string) => {
  const isServiceExists = await Service.findById(id);
  if (!isServiceExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Service is not found');
  }

  const result = await Service.findByIdAndDelete(id);
  return result;
};

export const servicesService = {
  createServiceIntoDb,
  getAllServicesByDoctorIdFromDb,
  getAllServicesFromDb,
  getSingleServiceFromDb,
  updateServiceIntoDb,
  deleteServiceIntoDb,
};
