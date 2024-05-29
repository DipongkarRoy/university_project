import express from 'express';

import validateRequst from '../../app/utiles/validateRequst';
import { FacultyValidations } from './faculty.validation';
import { facultyControllerAll } from './faculty.controller';

const router = express.Router();



router.post(
  '/create-faculty',
  validateRequst(FacultyValidations.facultyValid),
  facultyControllerAll.createFaculty
);

export const facultyRoutes = router;
