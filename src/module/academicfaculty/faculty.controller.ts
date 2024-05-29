import catchAsync from '../../app/utiles/catchAsyne';
import { facuyltyServiceAllDb } from './faculty.service';

const createFaculty = catchAsync(async (req, res) => {
  const result = await facuyltyServiceAllDb.CreateFacultyDb(req.body);
  res.status(200).json({
    success: true,
    message: 'academic faculty is created succesfully',
    data: result,
  });
});

export const facultyControllerAll = {
  createFaculty,
};
