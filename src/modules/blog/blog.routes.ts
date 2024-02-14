import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import { blogControllers } from './blog.controller';
import { blogValidationSchema } from './blog.validation';
const router = express.Router();

router.post(
  '/create-blog',
  validateRequest(blogValidationSchema.createBlogValidationSchema),
  blogControllers.createBlog,
);

router.get('/', blogControllers.getAllBlog);

router.get('/:id', blogControllers.getSingleBlog);

router.patch(
  '/:id',
  validateRequest(blogValidationSchema.updateBlogValidationSchema),
  blogControllers.updateSingleBlog,
);

router.delete('/:id', blogControllers.deleteSingleBlog);

export const blogRoutes = router;
