import catchAsync from '../../app/utiles/catchAsyne';
import { courseService } from './course.service';

const createCourse = catchAsync(async (req, res) => {
  const result = await courseService.createCourseIntoDb(req.body);
  console.log(result);
  res.status(200).json({
    success: true,
    massage: 'course data create successfully',
    data: result,
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const result = await courseService.getCourseFromDb(req.query);
  res.status(200).json({
    success: true,
    message: 'course is all data succesfully',
    data: result,
  });
});

const singleCourseId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await courseService.getSingleCourseDb(id);
  res.status(200).json({
    success: true,
    message: 'course is single Data succesfully',
    data: result,
  });
});

const deleteCourseId = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await courseService.getSingleCourseDb(id);
  res.status(200).json({
    success: true,
    message: 'course Data deleted succesfully',
    data: result,
  });
});

export const courseController = {
  createCourse,
  getAllCourse,
  singleCourseId,
  deleteCourseId,
};
