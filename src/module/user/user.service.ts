import config from '../../app/config';
import { TStudent } from '../student/student.interface';

import { UserModel } from './user.model';
import { Tuser } from './user.interface';
import { Student } from '../student/student.model';
import { AcademicSemesterModel } from '../academicSemester/semester.model';
import { generateStudentId } from './user.utils';
import { startSession } from 'mongoose';

const createUserIntoDB = async (studentData: TStudent, password: string) => {
  //create a users object: 1
  const userData: Partial<Tuser> = {};

  //user jodi password na day thahole condition cheeck::2

  userData.password = password || (config.default_pass as string);
  //set student role :3
  userData.role = 'student';
  //find academic semester :

  const semester: any = await AcademicSemesterModel.findById(
    studentData.admissionSemester,
  );
  //set manually genaratored it: :4

  //rollBack work:

  const session = await startSession();

  try {
    session.startTransaction();
    userData.id = await generateStudentId(semester);
    //create user: :5(tran -1)
    const newUser = await UserModel.create([userData], { session });
    // console.log(newUser);
    //create a student: 6
    if (!newUser.length) {
      throw new Error('failed to create users');
    }
    //set id ,_id as user
    // console.log(studentData);
    studentData.id = newUser[0].id;
    studentData.user = newUser[0]._id;

    const newStudent = await Student.create([studentData], { session });
    if (!newStudent.length) {
      throw new Error('failed to create users');
    }
    await session.commitTransaction();
    session.endSession();
    return newStudent;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.log(err);
  }
};

export const UserServices = {
  createUserIntoDB,
};
