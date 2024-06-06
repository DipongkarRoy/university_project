import QueryBuilder from '../../app/builder/queryBuilder';
import { AcademicSemesterModel } from '../academicSemester/semester.model';
import { TReg_semister } from './reg.semester.interface';
import { Reg_semesterSchemaModel } from './reg.semester.model';

const createReg_semisterIntoDb = async (payload: TReg_semister) => {
  const academicSemester = payload?.academicSemester;

  //cheek if there any registerd semester that is allready 'upcomeing'|'ongoing'

  const isThereUpcomeOngoimgSemester = await Reg_semesterSchemaModel.findOne({
    $or: [{ status: 'upcomeing' }, { status: 'ongoing' }],
  });
  if (isThereUpcomeOngoimgSemester) {
    throw new Error(`there are allready ${isThereUpcomeOngoimgSemester}`);
  }

  //cheek if the semester is exits:
  const academicSemesterExists =
    await AcademicSemesterModel.findById(academicSemester);
  if (!academicSemesterExists) {
    throw new Error('this academic semester not found');
  }

  //cheek if the semester is allready registered
  const isReg_SemesterExits = await Reg_semesterSchemaModel.findOne({
    academicSemester,
  });

  if (isReg_SemesterExits) {
    throw new Error('this semester all ready registered');
  }

  const result = await Reg_semesterSchemaModel.create(payload);
  return result;
};

const getAllReg_semisterIntoDb = async (query: Record<string, unknown>) => {
  const Reg_semesterQuery = new QueryBuilder(
    Reg_semesterSchemaModel.find().populate('academicSemester'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await Reg_semesterQuery.modelQuery;
  return result;
};

const getSingleReg_semisterIntoDb = async (id: string) => {
  const result = await Reg_semesterSchemaModel.findById(id);
  return result;
};

const updateReg_semisterIntoDb = async (
  id: string,
  payload: Partial<TReg_semister>,
) => {
  const isReg_SemesterExits = await Reg_semesterSchemaModel.findById(id);
  if (!isReg_SemesterExits) {
    throw new Error('this semester is not found');
  }

  const currentSemesterStatus = isReg_SemesterExits.status;

  const requstedStatus = payload?.status;

  if (currentSemesterStatus === 'ended') {
    throw new Error('this semester is allready exits');
  }
  //upcomeing ->ongoing ->ended
  if (currentSemesterStatus === 'upcomeing' && requstedStatus === 'ended') {
    throw new Error('you can not direct change status');
  }
  if (currentSemesterStatus === 'ongoing' && requstedStatus === 'upcomeing') {
    throw new Error('you can not direct change status');
  }
  const result = await Reg_semesterSchemaModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

export const Reg_semesterService = {
  createReg_semisterIntoDb,
  getAllReg_semisterIntoDb,
  getSingleReg_semisterIntoDb,
  updateReg_semisterIntoDb,
};
