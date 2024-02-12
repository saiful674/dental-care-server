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
  NumberOfPatientPerDay: number;
  durationOfSinglePatientVisit: number;
  isAvailable: boolean;
  isDeleted: boolean;
};
