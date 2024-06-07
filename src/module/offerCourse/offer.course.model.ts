import { Schema, model } from 'mongoose';
import { TOffer_course } from './offer.course.interface';

const daysEnum = {
  values: ['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri'],
  message: '{VALUE} is not a valid day',
};

const OfferCourseSchema = new Schema<TOffer_course>(
  {
    reg_Semester: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Reg_semester',
    },
    academicSemester: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'AcademicSemester',
    },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'FacultyModel',
    },
    academicDepartment: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Department',
    },
    course: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'CourseFaculty',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Faculty',
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    day: {
      type: String,
      enum: daysEnum,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const OfferCourseModel = model<TOffer_course>(
  'OfferCourse',
  OfferCourseSchema,
);
