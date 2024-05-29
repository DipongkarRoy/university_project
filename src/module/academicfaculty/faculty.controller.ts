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

const getFaculty = catchAsync(async(req ,res)=>{
  const result = await facuyltyServiceAllDb.getFacultyDb()
  res.status(200).json({
    success: true,
    message: 'academic faculty is all data succesfully',
    data: result,
  });
})

const singleFacultyId = catchAsync(async(req ,res)=>{
  const {facultyId}=req.params ;
  const result = await facuyltyServiceAllDb.singleFacultyDb(facultyId)
  res.status(200).json({
    success: true,
    message: 'academic faculty is single Data succesfully',
    data: result,
  });
})

const updateFaculty =catchAsync(async(req ,res)=>{
  const {facultyId} =req.params ;
  const result = await facuyltyServiceAllDb.updateFacultyDb(facultyId)
  res.status(200).json({
    success: true,
    message: 'academic faculty is created succesfully',
    data: result,
  });
})

export const facultyControllerAll = {
  createFaculty,
  getFaculty,
  singleFacultyId,
  updateFaculty
};
