import { z } from 'zod';

const facultyValid =z.object({
    name: z.string(),
  })

const facultyValidationData = z.object({
  body: z.object({
    name: z.string().optional(),
    
  }),
});


export const FacultyValidations ={
    facultyValid,
    facultyValidationData
}
