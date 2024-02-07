import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import Admin from './admin.model';

const getAllAdminFromDb = async () => {
  const result = await Admin.find();
  return result;
};
const getSingleAdminFromDb = async (id: string) => {
  const isAdminExists = await Admin.findById(id);
  if (!isAdminExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Admin not found');
  }
  return isAdminExists;
};

export const adminServices = {
  getAllAdminFromDb,
  getSingleAdminFromDb,
};
