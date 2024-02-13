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

export const serviceController = {
  createService,
};
