import express from 'express';

import { updateFacultyValidationSchema } from './faculty.validation';
import { FacultyControllers } from './faculty.controller';
import validateRequst from '../../app/utiles/validateRequst';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  validateRequst(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty,
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;