import catchAsync from '../../app/utiles/catchAsyne';
import { Reg_semesterService } from './reg.semester.service';

const createReg_semister = catchAsync(async (req, res) => {
  const result = await Reg_semesterService.createReg_semisterIntoDb(req.body);
  res.status(200).json({
    success: true,
    massage: 'Reg_semester data create successfully',
    data: result,
  });
});

const getAllReg_semister = catchAsync(async (req, res) => {
  const result = await Reg_semesterService.getAllReg_semisterIntoDb(req.query);
  res.status(200).json({
    success: true,
    massage: 'Reg_semester data all successfully',
    data: result,
  });
});

const getSingleReg_semister = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await Reg_semesterService.getSingleReg_semisterIntoDb(id);
  res.status(200).json({
    success: true,
    massage: 'Reg-semister is single Data successfully',
    data: result,
  });
});

const updateReg_semister =catchAsync(async(req ,res)=>{
    const {id}=req.params ;
    const result= await Reg_semesterService.updateReg_semisterIntoDb(id ,req.body)
    res.status(200).json({
        success: true,
        massage: 'Reg-semister update Data successfully',
        data: result,
      });
})

export const Reg_semesterController = {
  createReg_semister,
  getAllReg_semister,
  getSingleReg_semister,
  updateReg_semister
};
