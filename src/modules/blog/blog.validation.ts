import { z } from 'zod';

const createBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }),
    author: z.string().min(1, { message: 'Author is required' }),
    content: z.string().min(1, { message: 'Content is required' }),
    tags: z
      .array(z.string())
      .min(1, { message: 'At least one tag is required' }),
    category: z.string().min(1, { message: 'Category is required' }),
    imageUrl: z.string().min(1, { message: 'Image URL is required' }),
  }),
});

const updateBlogValidationSchema = z.object({
  body: z.object({
    title: z.string().min(1, { message: 'Title is required' }).optional(),
    author: z.string().min(1, { message: 'Author is required' }).optional(),
    content: z.string().min(1, { message: 'Content is required' }).optional(),
    tags: z
      .array(z.string())
      .min(1, { message: 'At least one tag is required' })
      .optional(),
    category: z.string().min(1, { message: 'Category is required' }).optional(),
    imageUrl: z
      .string()
      .min(1, { message: 'Image URL is required' })
      .optional(),
  }),
});

export const blogValidationSchema = {
  createBlogValidationSchema,
  updateBlogValidationSchema,
};
