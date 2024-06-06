import { Schema, model } from 'mongoose';
import { TReg_semister } from './reg.semester.interface';

const Reg_semesterSchema = new Schema<TReg_semister>(
  {
    academicSemester: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicSemester',
      unique: true,
      required: true,
    },
    status: {
      type: String,
      enum: ['upcomeing', 'ongoing', 'ended'],
      default: 'upcomeing',
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    minCredit: {
      type: Number,
      required: true,
      default:3
    },
    maxCredit: {
      type: Number,
      required: true,
      default:16
    },
  },
  {
    timestamps: true,
  },
);

export const Reg_semesterSchemaModel = model<TReg_semister>(
  'Reg_semester',
  Reg_semesterSchema,
);
