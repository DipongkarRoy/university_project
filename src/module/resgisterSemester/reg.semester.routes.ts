
import express from 'express' ;
import { Reg_semesterController } from './reg.semester.controller';


const router =express.Router()

router.post('/reg_semester' ,Reg_semesterController.createReg_semister)


export const Reg_semesterRouter = router ;