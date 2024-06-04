
import QueryBuilder from '../../app/builder/queryBuilder';
import { CourseModel } from './course.model';
import { TCourse } from './couse.interface';
import { courseSearchAble } from './course.constant';

const createCourseIntoDb = async (payload:TCourse) => {
  const result = await CourseModel.create(payload);
  return result;
};

const getCourseFromDb = async (query:Record<string,unknown>) => {
    const courseQuery = new QueryBuilder(CourseModel.find().populate('preRequisiteCourse.Course'),query)
    .search(courseSearchAble)
    .filter()
    .sort()
    .paginate()
    .fields()
  const result = await courseQuery.modelQuery ;
  return result;
};

const getSingleCourseDb = async (id: string) => {
  const result = await CourseModel.findById(id);
  return result;
};
const deleteCourseDb = async (id: string) => {
  const result = await CourseModel.findByIdAndUpdate(
    id,
    { isDeleted: true },
    {
      new: true,
    },
  );
  return result;
};

export const courseService = {
  createCourseIntoDb,
  getCourseFromDb,
  getSingleCourseDb,
  deleteCourseDb,
};
