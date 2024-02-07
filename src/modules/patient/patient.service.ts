import { TPatient } from './patient.interface';
import Patient from './patient.model';

const createPatientIntoDb = async (payload: TPatient) => {
  const result = await Patient.create(payload);
  return result;
};

export const patientServices = {
  createPatientIntoDb,
};
