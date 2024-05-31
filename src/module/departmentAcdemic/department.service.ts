import { TDepartment } from "./department.interface";
import { DepartmentModel } from "./department.model";

const createDepartmentDb = async(payload:TDepartment)=>{
    const result = (await DepartmentModel.create(payload))
    return result ;
};

const getDepartmentDb = async()=>{
    const result = await DepartmentModel.find()
    return result ;
}

const singleDepartmentDb = async(id:string)=>{
    const result = await DepartmentModel.findById(id)
    return result ;
}

const updateDepartmentDb = async(id:string ,payload: Partial<TDepartment>)=>{
    const result = await DepartmentModel.findByIdAndUpdate({
        _id:id
    },
payload,{
    new:true
})
return result ;
}


export const departmentAllDb = {
    createDepartmentDb ,
    getDepartmentDb,
    singleDepartmentDb,
    updateDepartmentDb
}