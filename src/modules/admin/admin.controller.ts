import catchAsync from '../../utils/catchAsync';
import { adminServices } from './admin.service';

const getAllAdmins = catchAsync(async (req, res) => {
  const result = await adminServices.getAllAdminFromDb();
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Admins are retrived successfully',
    data: result,
  });
});
const getSingleAdmin = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await adminServices.getSingleAdminFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Admin is retrived successfully',
    data: result,
  });
});

export const adminControllers = {
  getAllAdmins,
  getSingleAdmin,
};
