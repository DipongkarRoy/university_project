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

const getSemesterDb = async()=>{
    const result = await AcademicSemesterModel.find()
    return result ;
}
const singleSemesterIdDb = async(id:string)=>{
    const result = await AcademicSemesterModel.findById(id)
    return result ;
}

const updateSemesterDb = async(id:string ,payload:Partial<TAcademicSemester>)=>{
    if(payload.name&& payload.code&&semesterMapper[payload.name]!==payload.code){
        throw new Error('Invalid Semester Code');
    }

    const result = await AcademicSemesterModel.findByIdAndUpdate({_id:id },payload ,{new:true})
    return result ;

}

export const semesterDbAll = {
    createSemesterDb,
    getSemesterDb,
    singleSemesterIdDb ,
    updateSemesterDb
}