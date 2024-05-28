import { z } from 'zod';

export const monthEnum = z.enum([
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
]);

export const academicSemesterSchemaValidation = z.object({
  body: z.object({
    name: z.enum(['Autumn', 'Summer', 'Fall']),
    code: z.enum(['01', '02', '03']),
    year: z.string(),
    startMonth: monthEnum,
    endMonth: monthEnum,
  }),
});

export const TAcademicSemesterValidates = {
  academicSemesterSchemaValidation,
};
