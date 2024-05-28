import express from 'express'
import { semesterControllers } from './semester.controller';
import validateRequst from '../../app/utiles/validateRequst';
import { TAcademicSemesterValidates } from './semester.validation';

const router = express.Router()


router.post('/create-semester' ,validateRequst(TAcademicSemesterValidates.academicSemesterSchemaValidation) , semesterControllers.createSemester)



export const semesterRoutes = router ;