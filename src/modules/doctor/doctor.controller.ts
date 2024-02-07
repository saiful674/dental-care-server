import catchAsync from '../../utils/catchAsync';
import { doctorServices } from './doctor.service';

const getAllDoctors = catchAsync(async (req, res) => {
  const result = await doctorServices.getAllDoctorsFromDb();
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Doctors are retrived successfully',
    data: result,
  });
});
const getSingleDoctor = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await doctorServices.getSingleDoctorsFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Doctor is retrived successfully',
    data: result,
  });
});

export const doctorControllers = {
  getAllDoctors,
  getSingleDoctor,
};
