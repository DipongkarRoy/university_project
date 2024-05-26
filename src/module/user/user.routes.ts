import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.validation';

const router = express.Router();

const validateRequst = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};

router.post(
  '/create-user',
  validateRequst(studentValidations.studentValidationSchema),
  userControllers.createUser,
);

export const userRoutes = router;
