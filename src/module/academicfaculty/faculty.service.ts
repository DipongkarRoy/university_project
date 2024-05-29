import { TFaculty } from "./faculty.interface";
import { FacultyModel } from "./faculty.model";

const CreateFacultyDb =async(payload:TFaculty)=>{
    const result = await FacultyModel.create(payload)
    return result
}

const getFacultyDb=async()=>{
    const result = await FacultyModel.find()
    return result;
}

const singleFacultyDb =async(id:string)=>{
    const result = await FacultyModel.findById(id);
    return result;
}
const updateFacultyDb = async(id:string)=>{
    const result = await FacultyModel.findByIdAndUpdate(id);
    return result ;
}


export const facuyltyServiceAllDb ={
    CreateFacultyDb,
    getFacultyDb,
    singleFacultyDb,
    updateFacultyDb
}