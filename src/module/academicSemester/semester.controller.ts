import catchAsync from '../../app/utiles/catchAsyne';
import { semesterDbAll } from './semester.service';

const createSemester = catchAsync(async (req, res) => {
  const result = await semesterDbAll.createSemesterDb(req.body);

  res.status(200).json({
    success: true,
    message: 'Academic semester is created succesfully',
    data: result,
  });
});

const getSemester = catchAsync(async (req, res) => {
  const result = await semesterDbAll.getSemesterDb();
  res.status(200).json({
    success: true,
    message: 'Academic semester all succesfully',
    data: result,
  });
});

const singleSemesterId = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  //console.log(semesterId);
  const result = await semesterDbAll.singleSemesterIdDb(semesterId);
  res.status(200).json({
    success: true,
    message: 'Academic semester single Id create succesfully',
    data: result,
  });
});

const updateSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  //console.log(semesterId);

  const result = await semesterDbAll.updateSemesterDb(semesterId, req.body);
  res.status(200).json({
    success: true,
    message: 'Academic semester single Id create succesfully',
    data: result,
  });
});

export const semesterControllers = {
  createSemester,
  getSemester,
  singleSemesterId,
  updateSemester,
};
