import { UserModel } from '../user/user.model';
import { Student } from './student.model';
import { startSession } from 'mongoose';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  //console.log('base query ',query);
  const queryObj = { ...query };
  //{email:{$regex:query.searchTerm ,$options:'i'}}

  const studentSearchAbleFields = ['email', 'name.firstName', 'presentAddress'];
  let searchTerm = ' ';
  if (query?.searchTerm) {
    searchTerm = query.searchTerm as string;
  }

  const searchQuery = Student.find({
    $or: studentSearchAbleFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  //fillter ing working :
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];

  excludeFields.forEach((element) => delete queryObj[element]);
  console.log({ query }, { queryObj });

  const fillterQuery = searchQuery.find(queryObj).populate('admissionSemester');

  let sort = '-createdAt';
  if (query.sort) {
    sort = query.sort as string;
  }

  const sortQuery = fillterQuery.sort(sort);
  let page = 1;
  let limit = 1;
  let skip = 0;

  if (query.limit) {
    limit = Number(query.limit);
    console.log(limit);
  }

  if (query.page) {
    page = Number(query.page);
    skip = (page - 1) * limit;
  }

  const paginateQuery = sortQuery.skip(skip);
  const limitQuery = paginateQuery.limit(limit);
  //convart fild limiting
  let fields = '-__v';
  if (query.fields) {
    fields = (query.fields as string).split(',').join(' ');
    console.log(fields);
  }
  const fieldsQuery = await limitQuery.select(fields);
  return fieldsQuery;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.aggregate([{ $match: { id } }]);
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const session = await startSession();
  try {
    const deleteStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteStudent) {
      throw new Error('failed to delete user !');
    }

    const deleteUser = await UserModel.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deleteUser) {
      throw new Error('failed to delete user !');
    }

    await session.commitTransaction();
    session.endSession();
    return deleteStudent;
  } catch (err) {
    await session.abortTransaction();
    session.endSession();
    console.log(err);
  }
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteStudentFromDB,
};
