import express from 'express';
import { semesterControllers } from './semester.controller';
import validateRequst from '../../app/utiles/validateRequst';
import { TAcademicSemesterValidates } from './semester.validation';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequst(TAcademicSemesterValidates.academicSemesterSchemaValidation),
  semesterControllers.createSemester,
);

router.get('/', semesterControllers.getSemester);
router.get('/:semesterId', semesterControllers.singleSemesterId);
router.patch(
  '/:semesterId',
  validateRequst(
    TAcademicSemesterValidates.updateAcademicSemesterValidationSchema,
  ),
  semesterControllers.updateSemester,
);

export const semesterRoutes = router;
