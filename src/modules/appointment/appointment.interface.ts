import { Model } from 'mongoose';

export type TAppointment = {
  doctorId: string;
  dayOfWeek:
    | 'Sunday'
    | 'Monday'
    | 'Tuesday'
    | 'Wednesday'
    | 'Thursday'
    | 'Friday'
    | 'Saturday';
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
