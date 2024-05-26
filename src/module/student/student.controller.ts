

import { StudentServices } from './student.service';
import catchAsync from '../../app/utiles/catchAsyne';

const getSingleStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    massage: 'data successfully',
    data: result,
  });
});

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();

  res.status(200).json({
    success: true,
    message: 'Student are retrieved succesfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req, res) => {
  const { studentId } = req.params;
  const result = await StudentServices.deleteStudentFromDB(studentId);

  res.status(200).json({
    success: true,
    message: 'Student is deleted succesfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
