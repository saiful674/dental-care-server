import { Types } from 'mongoose';

export type TService = {
  doctorId: Types.ObjectId;
  name: string;
  description: string;
  fee: number;
};
