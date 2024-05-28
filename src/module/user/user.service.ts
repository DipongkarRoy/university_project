
import config from "../../app/config";
import { TStudent } from "../student/student.interface";

import { UserModel } from "./user.model";
import { Tuser } from "./user.interface";
import { Student } from "../student/student.model";

const createUserIntoDB = async ( studentData: TStudent ,password:string) => {
    //create a users object: 1
    const userData:Partial<Tuser>={}
    //user jodi password na day thahole condition cheeck::2
   
    userData.password = password || (config.default_pass as string)
    //set student role :3
    userData.role ='student' 
    //set manually genaratored it: :4
    userData.id ='2030100002'
    //create user: :5
    const newUser = await UserModel.create(userData);
   // console.log(newUser);
    //create a student: 6
    if(Object.keys(newUser).length){
        //set id ,_id as user
       // console.log(studentData);
        studentData.id =newUser.id
        studentData.user=newUser._id


        const newStudent = await Student.create(studentData)
        return newStudent ;
    }
    
  };



 export const UserServices ={
    createUserIntoDB
 } 