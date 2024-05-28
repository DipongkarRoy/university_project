import { z } from 'zod';

const userValidationSchema =z.object({
  body: z.object({
    password: z
      .string({
        invalid_type_error: 'Name must be a string',
      })
      .max(20, { message: 'Password is required then 20 characters' })
      .optional(),
    })
})

export const UserValidation = userValidationSchema;
