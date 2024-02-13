import { Model } from 'mongoose';
type Days =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type TAppointment = {
  doctorId: string;
  dayOfWeek: Days[];
  startTime: string;
  endTime: string;
  fee: number;
  shift: 'Morning' | 'Evening';
  NumberOfPatientPerDay: number;
  durationOfSinglePatientVisit: number;
  isAvailable: boolean;
  isDeleted: boolean;
};

export interface AppointmentModel extends Model<TAppointment> {
  //instance methods for checking if the user exist
  isAppointmentExistsById(id: string): Promise<TAppointment>;
}
