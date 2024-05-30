import express from 'express'
import { departmentController } from './department.controller';


const router = express.Router()

router.post('/create-department' , departmentController.createDepartment)
router.get('/' , departmentController.getDepartment)
router.get('/:departmentId' ,departmentController.singleDepartmentId)
router.patch('/:departmentId' ,departmentController.updateDepartment)



export const departmentRoutes = router ;