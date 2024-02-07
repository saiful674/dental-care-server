import catchAsync from '../../utils/catchAsync';
import { userServices } from './user.service';

const createPatient = catchAsync(async (req, res) => {
  const { password, patient } = req.body;
  const result = await userServices.createPatientIntoDb(password, patient);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Patient is created successfully',
    data: result,
  });
});

export const userControllers = {
  createPatient,
};
