import { z } from 'zod';

const facultyValid = z.object({
  body: z.object({
    name: z.string(),
  }),
});

export const FacultyValidations ={
    facultyValid
}
