import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';


const getAllStudents = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (error) {
   next(error)
  }
};

const getSingleStudent = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const { studentsId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentsId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (error) {
   next(error)
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};