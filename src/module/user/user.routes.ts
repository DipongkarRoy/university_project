import express from 'express';
import { userControllers } from './user.controller';

import { studentValidations } from '../student/student.validation';
import validateRequst from '../../app/utiles/validateRequst';

const router = express.Router();



router.post(
  '/create-user',
  validateRequst(studentValidations.studentValidationSchema),
  userControllers.createUser,
);

export const userRoutes = router;
