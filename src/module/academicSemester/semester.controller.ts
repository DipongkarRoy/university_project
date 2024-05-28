import catchAsync from "../../app/utiles/catchAsyne";
import { semesterDbAll } from "./semester.service";



const createSemester = catchAsync(async (req, res,) => {
  
  
  
  const result = await semesterDbAll.createSemesterDb(req.body);

  res.status(200).json({
    success: true,
    message: 'Academic semester is created succesfully',
    data:result 
  });
});

export const semesterControllers = {
   createSemester,
};
