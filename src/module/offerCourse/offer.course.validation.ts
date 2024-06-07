import { z } from 'zod';

const DaysEnum = z.enum(['sat', 'sun', 'mon', 'tue', 'wed', 'thu', 'fri']);

const TOfferCourseSchemaValited = z.object({
  body: z.object({
    reg_Semester: z.string(),
    academicSemester: z.string().optional(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    maxCapacity: z.number(),
    day: DaysEnum,
    startTime: z.string(),
    endTime: z.string(),
  }),
});

const updateOfferCourseSchemaValited = z.object({
  body: z.object({
    faculty: z.string().optional(),
    maxCapacity: z.number().optional(),
    day: DaysEnum,
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const OfferCourseValited = {
  TOfferCourseSchemaValited,
  updateOfferCourseSchemaValited,
};
