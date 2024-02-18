import express from 'express';
import validateRequest from '../../middlewares/validateRequest';

import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import { blogControllers } from './blog.controller';
import { blogValidationSchema } from './blog.validation';
const router = express.Router();

router.post(
  '/create-blog',
  auth(USER_ROLE.admin),
  validateRequest(blogValidationSchema.createBlogValidationSchema),
  blogControllers.createBlog,
);

router.get('/', blogControllers.getAllBlog);

router.get('/:id', blogControllers.getSingleBlog);

router.patch(
  '/:id',
  auth(USER_ROLE.admin),
  validateRequest(blogValidationSchema.updateBlogValidationSchema),
  blogControllers.updateSingleBlog,
);

router.delete('/:id', auth(USER_ROLE.admin), blogControllers.deleteSingleBlog);

export const blogRoutes = router;
