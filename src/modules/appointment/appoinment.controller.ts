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

export const appointmentControllers = {
  createAppointment,
};
