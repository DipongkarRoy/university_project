import catchAsync from '../../app/utiles/catchAsyne';
import { OfferCourseService } from './offer.course.service';

const createOfferCourse = catchAsync(async (req, res) => {
  const result = await OfferCourseService.offerCourseCreateIntoDb(req.body);
  res.status(200).json({
    success: true,
    massage: 'Reg_semester data create successfully',
    data: result,
  });
});

const getAllOfferCourse = catchAsync(async (req, res) => {
  const result = await OfferCourseService.offerCourseAllIntoDb(req.query);
  res.status(200).json({
    success: true,
    massage: 'Reg_semester data all successfully',
    data: result,
  });
});

const getSingleOfferCourse = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await OfferCourseService.getSingleOfferCourse(id);
  res.status(200).json({
    success: true,
    massage: 'Reg-semister is single Data successfully',
    data: result,
  });
});

const updateOfferCourse = catchAsync(async (req, res) => {
  //const { id } = req.params;
  const result = await OfferCourseService.updateOfferCourseIntoDb();
  res.status(200).json({
    success: true,
    massage: 'Reg-semister update Data successfully',
    data: result,
  });
});

export const OfferCourseController = {
  createOfferCourse,
  getAllOfferCourse,
  getSingleOfferCourse,
  updateOfferCourse,
};
