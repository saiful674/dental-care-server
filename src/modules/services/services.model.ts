import { Schema, model } from 'mongoose';
import { TService } from './services.interface';

const serviceSchema = new Schema<TService>(
  {
    doctorId: {
      type: Schema.Types.ObjectId,
      required: [true, 'Doctor ID is required.'],
      ref: 'Doctor',
    },
    name: {
      type: String,
      required: [true, 'Service name is required.'],
      minlength: [3, 'Service name must be at least 3 characters long.'],
      maxlength: [255, 'Service name cannot exceed 255 characters.'],
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Service description is required.'],
      minlength: [
        10,
        'Service description must be at least 10 characters long.',
      ],
      maxlength: [1024, 'Service description cannot exceed 1024 characters.'],
      trim: true,
    },
    imgUrl: {
      type: String,
      required: [true, 'Image url is required.'],
    },
    fee: {
      type: Number,
      required: [true, 'Service fee is required.'],
      min: [0, 'Service fee cannot be negative.'],
    },
  },
  { timestamps: true },
);

export const Service = model<TService>('Service', serviceSchema);
