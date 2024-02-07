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

const createAdmin = catchAsync(async (req, res) => {
  const { password, admin } = req.body;
  const result = await userServices.createAdminIntoDb(password, admin);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Admin is created successfully',
    data: result,
  });
});
const createDoctor = catchAsync(async (req, res) => {
  const { password, doctor } = req.body;
  const result = await userServices.createDoctorIntoDb(password, doctor);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Doctor is created successfully',
    data: result,
  });
});

export const userControllers = {
  createPatient,
  createAdmin,
  createDoctor,
};
