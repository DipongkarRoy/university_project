import express from 'express';
import validateRequst from '../../app/utiles/validateRequst';
import { OfferCourseValited } from './offer.course.validation';
import { OfferCourseController } from './offer.course.controller';

const router = express.Router();

router.post(
  '/reg-semester',
  validateRequst(OfferCourseValited.TOfferCourseSchemaValited),
  OfferCourseController.createOfferCourse,
);
router.get('/', OfferCourseController.getAllOfferCourse);
router.get('/:id', OfferCourseController.getSingleOfferCourse);
router.patch(
  '/:id',
  validateRequst(OfferCourseValited.updateOfferCourseSchemaValited),
  OfferCourseController.updateOfferCourse,
);

export const OfferCourseRouter = router;
