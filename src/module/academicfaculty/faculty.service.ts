import { TFaculty } from "./faculty.interface";
import { FacultyModel } from "./faculty.model";

const CreateFacultyDb =async(payload:TFaculty)=>{
    const result = await FacultyModel.create(payload)
    return result
}


export const facuyltyServiceAllDb ={
    CreateFacultyDb
}