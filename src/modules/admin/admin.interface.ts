import { Types } from 'mongoose';

export type TAdmin = {
  firstName: string;
  lastName: string;
  id: string;
  user: Types.ObjectId;
  dateOfBirth: Date;
  designation: string;
  gender: 'Male' | 'Female' | 'Other';
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
  email: string;
  contactNumber: string;
  emergencyContactNumber: string;
  address: string;
  isDeleted?: boolean;
};
