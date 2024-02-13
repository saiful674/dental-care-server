import { Schema, model } from 'mongoose';
import { TAppointment } from './appointment.interface';

const appointmentSchema = new Schema<TAppointment>(
  {
    doctorId: {
      type: String,
      required: [true, 'Doctor ID is required'],
    },
    dayOfWeek: {
      type: String,
      enum: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      required: [true, 'Day of the week is required'],
    },
    startTime: {
      type: String,
      required: [true, 'Start time is required'],
    },
    endTime: {
      type: String,
      required: [true, 'End time is required'],
    },
    fee: {
      type: Number,
      required: [true, 'Fee is required'],
    },
    NumberOfPatientPerDay: {
      type: Number,
      required: [true, 'Number of patients per day is required'],
    },
    shift: {
      type: String,
      enum: ['Morning', 'Evening'],
      required: [
        true,
        'Shift is required, and it will be eighter "Morning" or "Evening"',
      ],
    },
    durationOfSinglePatientVisit: {
      type: Number,
      required: [true, 'Duration of single patient visit is required'],
    },
    isAvailable: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

const Appointment = model<TAppointment>('Appointment', appointmentSchema);

export default Appointment;
