
import catchAsync from "../../app/utiles/catchAsyne";
import { Reg_semesterService } from "./reg.semester.service";

const createReg_semister = catchAsync(async(req ,res)=>{
    const result = await Reg_semesterService.createReg_semisterIntoDb(req.body)
    res.status(200).json({
        success:true ,
        massage:"Reg_semester data create successfully",
        data:result 
    })
})



export const Reg_semesterController = {
    createReg_semister
}