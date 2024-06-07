import { Types } from "mongoose"
export type Days ='sat'|'sun'|'mon'|'tue'|'wed'|'thu'|'fri'


export type TOffer_course ={
    reg_Semester : Types.ObjectId ,
    academicSemester:Types.ObjectId,
    academicFaculty:Types.ObjectId,
    academicDepartment:Types.ObjectId,
    course:Types.ObjectId,
    faculty:Types.ObjectId,
    maxCapacity:number ,
    day: Days,
    startTime:string ,
    endTime:string 

}