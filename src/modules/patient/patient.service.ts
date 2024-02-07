import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
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

export const patientServices = {
  getAllPatientsFromDb,
  getSinglePatientsFromDb,
};
