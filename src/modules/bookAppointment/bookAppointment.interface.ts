import { Types } from 'mongoose';

export type TBookAppointment = {
  doctorId: Types.ObjectId;
  patientId: Types.ObjectId;
  appointmentId: Types.ObjectId;
  appointmentDate: Date;
  appointmentTime: string;
  reason: string;
  contactNumber: string;
  email: string;
  additionalNotes?: string;
};
