import express from 'express';

import validateRequst from '../../app/utiles/validateRequst';
import { FacultyValidations } from './faculty.validation';
import { facultyControllerAll } from './faculty.controller';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequst(FacultyValidations.facultyValid),
  facultyControllerAll.createFaculty,
);
router.get('/', facultyControllerAll.getFaculty);
router.get('/:facultyId', facultyControllerAll.singleFacultyId);
router.patch(
  '/:facultyId',
  validateRequst(FacultyValidations.facultyValidationData),
  facultyControllerAll.updateFaculty,
);

export const facultyRoutes = router;
