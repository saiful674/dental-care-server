import { Schema, model } from 'mongoose';
import { bloodGroup } from '../../constant/global.constant';
import { TAdmin } from './admin.interface';

const adminSchema = new Schema<TAdmin>(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required'],
    },

    id: {
      type: String,
      unique: true,
      required: [true, 'ID is required'],
    },
    user: {
      type: Schema.Types.ObjectId,
      unique: true,
      ref: 'User',
      required: [true, 'User reference is required'],
    },

    dateOfBirth: {
      type: Date,
      required: [true, 'Date of birth is required'],
    },
    designation: {
      type: String,
      required: [true, 'Designation is required'],
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'],
      required: [true, 'Gender is required'],
    },
    bloodGroup: {
      type: String,
      enum: bloodGroup,
      required: [true, 'Blood group is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    contactNumber: {
      type: String,
      required: [true, 'Contact number is required'],
    },
    emergencyContactNumber: {
      type: String,
      required: [true, 'Emergency contact number is required'],
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

const Admin = model<TAdmin>('Admin', adminSchema);

export default Admin;
