import { Types } from "mongoose"

export type TReg_semister ={
    academicSemester :Types.ObjectId ,
    status:'upcomeing'|'ongoing'|'ended',
    startDate:Date ,
    endDate:Date ,
    minCredit:number ,
    maxCredit:number 

}