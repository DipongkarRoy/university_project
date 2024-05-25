
import config from "../../app/config";
import { Student } from "../student/student.interface";

import { UserModel } from "./user.model";
import { Tuser } from "./user.interface";
import { StudentModel } from "../student/student.model";

const createUserIntoDB = async ( studentData: Student ,password:string) => {
    //create a users object
    const userData:Partial<Tuser>={}
    //user jodi password na day thahole condition cheeck:
   
    userData.password = password || (config.default_pass as string)
    //set student role
    userData.role ='student' 
    //set manually genaratored it:
    userData.id ='2030100001'
    //create user:
    const newUser = await UserModel.create(userData);
   // console.log(newUser);
    //create a student:
    if(Object.keys(newUser).length){
        //set id ,_id as user
        console.log(studentData);
        studentData.id =newUser.id
        studentData.user=newUser._id


        const newStudent = await StudentModel.create(studentData)
        return newStudent ;
    }
    
  };



 export const UserServices ={
    createUserIntoDB
 } 