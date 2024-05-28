import { TAcademicSemester } from "./semester.interface";
import { AcademicSemesterModel } from "./semester.model";


const createSemesterDb = async(payload :TAcademicSemester)=>{
 const result =await AcademicSemesterModel.create(payload)
 return result ;

}

export const semesterDbAll = {
    createSemesterDb
}