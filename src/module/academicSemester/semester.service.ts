import { TAcademicSemester, semesterMapper } from "./semester.interface";
import { AcademicSemesterModel } from "./semester.model";


const createSemesterDb = async(payload :TAcademicSemester)=>{
 

//semesterMapper interface theke import korci...

 if(semesterMapper[payload.name]!==payload.code){
    throw new Error('allready semester exist')
 }


 const result =await AcademicSemesterModel.create(payload)
 return result ;

}

export const semesterDbAll = {
    createSemesterDb
}