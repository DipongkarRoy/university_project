import { Schema, model } from "mongoose";
import { TReg_semister } from "./reg.semester.interface";

const Reg_semesterSchema = new Schema <TReg_semister>({
 title:{
    type:String 
 }
})


export const  Reg_semesterSchemaModel = model<TReg_semister>('Reg_semester' ,Reg_semesterSchema)