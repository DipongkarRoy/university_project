
import express from 'express';
import { courseController } from './course.controller';
import validateRequst from '../../app/utiles/validateRequst';
import { courseValidations } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  validateRequst(courseValidations.CourseSchemaValidation),
  courseController.createCourse,
);
router.get('/', courseController.getAllCourse);
router.get('/:id', courseController.getAllCourse);
router.delete('/:id', courseController.deleteCourseId);

export const courseRoute = router;
