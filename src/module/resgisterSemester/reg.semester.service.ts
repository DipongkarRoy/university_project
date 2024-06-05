
import { TReg_semister } from "./reg.semester.interface"
import { Reg_semesterSchemaModel } from "./reg.semester.model"

const createReg_semisterIntoDb = async(payload:TReg_semister)=>{
    const result = await Reg_semesterSchemaModel.create(payload)
    return result ;
}




export const Reg_semesterService = {
    createReg_semisterIntoDb ,
}