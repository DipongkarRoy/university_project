import catchAsync from "../../app/utiles/catchAsyne";
import { departmentAllDb } from "./department.service";

const createDepartment = catchAsync(async(req ,res)=>{
    const result = (await departmentAllDb.createDepartmentDb(req.body)).populate('academicFaculty');
    res.status(200).json({
        success: true,
        message: 'academic department is created succesfully',
        data: result,
      });

})
const getDepartment = catchAsync(async(req ,res)=>{
    const result = await departmentAllDb.getDepartmentDb()
    res.status(200).json({
        success: true,
        message: 'academic department  is all data succesfully',
        data: result,
      });
})
const singleDepartmentId = catchAsync(async(req ,res)=>{
    const {departmentId} =req.params ;

    const result = await departmentAllDb.singleDepartmentDb(departmentId)
    res.status(200).json({
        success: true,
        message: 'academic department is single data created succesfully',
        data: result,
      });
})

const updateDepartment = catchAsync(async(req ,res)=>{
    const {departmentId} =req.params ;
    const result = await departmentAllDb.updateDepartmentDb(departmentId ,req.body)
    res.status(200).json({
        success: true,
        message: 'academic department update data succesfully',
        data: result,
      });
})



export const departmentController = {
    createDepartment ,
    getDepartment,
    singleDepartmentId,
    updateDepartment
}