import catchAsync from '../../utils/catchAsync';
import { appointmentServices } from './appoinment.service';

const createAppointment = catchAsync(async (req, res) => {
  const result = await appointmentServices.createAppointmentIntoDb(req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Appointment schedule added successfully',
    data: result,
  });
});

const getAllAppointment = catchAsync(async (req, res) => {
  const result = await appointmentServices.getAllAppoinmentFromDb();
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Appointments are retrived successfully',
    data: result,
  });
});
const getSingleAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await appointmentServices.getSingleAppoinmentFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Appointment id retrived successfully',
    data: result,
  });
});
const updateSingleAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await appointmentServices.updateAppointmentFromDb(
    id,
    req.body,
  );
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Appointment is updated successfully',
    data: result,
  });
});

const deleteSingleAppointment = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await appointmentServices.deleteAppointmentIntoDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Appointment is deleted successfully',
    data: result,
  });
});

export const appointmentControllers = {
  createAppointment,
  getAllAppointment,
  getSingleAppointment,
  updateSingleAppointment,
  deleteSingleAppointment,
};
