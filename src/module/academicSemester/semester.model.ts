import { Schema, model } from 'mongoose';
import { TAcademicSemester } from './semester.interface';

const monthValues = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
const AcademicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: ['Autumn', 'Summer', 'Fall'],
  },
  code: {
    type: String,
    enum: ['01', '02', '03'],
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    required: true,
    enum: monthValues,
  },
  endMonth: {
    type: String,
    required: true,
    enum: monthValues,
  },
});

export const AcademicSemesterModel = model<TAcademicSemester>(
  'AcademicSemester',
  AcademicSemesterSchema,
);
