import catchAsync from '../../utils/catchAsync';
import { blogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await blogServices.createBlogIntoDb(req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Blog schedule added successfully',
    data: result,
  });
});

const getAllBlog = catchAsync(async (req, res) => {
  const result = await blogServices.getAllBlogFromDb();
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Blogs are retrived successfully',
    data: result,
  });
});
const getSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.getSingleBlogFromDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Blog id retrived successfully',
    data: result,
  });
});
const updateSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.updateBlogIntoDb(id, req.body);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Blog is updated successfully',
    data: result,
  });
});

const deleteSingleBlog = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await blogServices.deleteBlogIntoDb(id);
  // will send response data
  res.status(200).json({
    status: true,
    message: 'Blog is deleted successfully',
    data: result,
  });
});

export const blogControllers = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateSingleBlog,
  deleteSingleBlog,
};
