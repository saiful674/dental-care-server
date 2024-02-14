import mongoose from 'mongoose';
import { TBlog } from './blog.interface';
const { Schema } = mongoose;

const blogSchema = new Schema<TBlog>(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
    },
    author: {
      type: String,
      required: [true, 'Author is required'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
    },
    tags: {
      type: [String],
      required: [true, 'At least one tag is required'],
    },
    category: {
      type: String,
      required: [true, 'Category is required'],
    },
    imageUrl: {
      type: String,
      required: [true, 'Image URL is required'],
    },
  },
  {
    timestamps: true,
  },
);

const Blog = mongoose.model<TBlog>('Blog', blogSchema);

export default Blog;
