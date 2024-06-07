import QueryBuilder from '../../app/builder/queryBuilder';
import { TOffer_course } from './offer.course.interface';
import { OfferCourseModel } from './offer.course.model';

const offerCourseCreateIntoDb = async (payload: TOffer_course) => {
  const result = await OfferCourseModel.create(payload);
  return result;
};

const offerCourseAllIntoDb = async (query: Record<string, unknown>) => {
  const Reg_semesterQuery = new QueryBuilder(
    OfferCourseModel.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await Reg_semesterQuery.modelQuery;
  return result;
};

const getSingleOfferCourse = async (id: string) => {
  const result = await OfferCourseModel.findById(id);
  return result;
};

const updateOfferCourseIntoDb = async () => {};

export const OfferCourseService = {
  offerCourseCreateIntoDb,
  offerCourseAllIntoDb,
  getSingleOfferCourse,
  updateOfferCourseIntoDb,
};
