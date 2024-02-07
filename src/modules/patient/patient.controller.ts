import catchAsync from '../../utils/catchAsync';
import { patientServices } from './patient.service';

const createPatient = catchAsync(async (req, res) => {
  const result = await patientServices.createPatientIntoDb(req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Patient is created successfully',
    data: result,
  });
});

export const patientControllers = {
  createPatient,
};
