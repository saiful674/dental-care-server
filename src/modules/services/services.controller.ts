import catchAsync from '../../utils/catchAsync';
import { servicesService } from './services.service';

const createService = catchAsync(async (req, res) => {
  const result = await servicesService.createServiceIntoDb(req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Service added successfully',
    data: result,
  });
});
const getAllServices = catchAsync(async (req, res) => {
  const result = await servicesService.getAllServicesFromDb();
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Services are retrived successfully',
    data: result,
  });
});
const getSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await servicesService.getSingleServiceFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Service is retrived successfully',
    data: result,
  });
});
const getServicesByDoctorId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await servicesService.getAllServicesByDoctorIdFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Services are retrived successfully',
    data: result,
  });
});

const updateSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await servicesService.updateServiceIntoDb(id, req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Service is update successfully',
    data: result,
  });
});
const deleteSingleService = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await servicesService.deleteServiceIntoDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Service is deleted successfully',
    data: result,
  });
});

export const serviceController = {
  createService,
  getAllServices,
  getSingleService,
  getServicesByDoctorId,
  updateSingleService,
  deleteSingleService,
};
