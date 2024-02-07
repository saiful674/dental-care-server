import catchAsync from '../../utils/catchAsync';
import { patientServices } from './patient.service';

const getAllPatients = catchAsync(async (req, res) => {
  const result = await patientServices.getAllPatientsFromDb();
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Patients are retrived successfully',
    data: result,
  });
});
const getSinglePatient = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await patientServices.getSinglePatientsFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Patient is retrived successfully',
    data: result,
  });
});

export const patientControllers = {
  getAllPatients,
  getSinglePatient,
};
