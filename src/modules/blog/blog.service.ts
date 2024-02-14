import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { TBlog } from './blog.interface';
import Blog from './blog.model';

const createBlogIntoDb = async (payload: TBlog) => {
  const isBlogExists = await Blog.findOne({
    title: payload.title,
    author: payload.author,
  });
  if (isBlogExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      'You have already a blog with same title! Please a new blog',
    );
  }
  const result = await Blog.create(payload);
  return result;
};

const getAllBlogFromDb = async () => {
  const result = await Blog.find();
  return result;
};

const getSingleBlogFromDb = async (id: string) => {
  const isBlogExists = await Blog.findById(id);
  if (!isBlogExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  return isBlogExists;
};

const updateBlogIntoDb = async (id: string, payload: Partial<TBlog>) => {
  const isBlogExists = await Blog.findById(id);

  if (!isBlogExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }

  const result = await Blog.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteBlogIntoDb = async (id: string) => {
  const isBlogExists = await Blog.findById(id);
  if (!isBlogExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Blog not found');
  }
  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const blogServices = {
  createBlogIntoDb,
  getAllBlogFromDb,
  getSingleBlogFromDb,
  deleteBlogIntoDb,
  updateBlogIntoDb,
};
