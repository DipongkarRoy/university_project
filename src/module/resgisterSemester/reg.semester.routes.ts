import express from 'express';
import { Reg_semesterController } from './reg.semester.controller';
import validateRequst from '../../app/utiles/validateRequst';
import { Reg_semesterValiDation } from './reg.semester.validate';

const router = express.Router();

router.post(
  '/reg-semester',
  validateRequst(Reg_semesterValiDation.Reg_semesterValiDate),
  Reg_semesterController.createReg_semister,
);
router.get('/', Reg_semesterController.getAllReg_semister);
router.get('/:id', Reg_semesterController.getSingleReg_semister);
router.patch(
  '/:id',
  validateRequst(Reg_semesterValiDation.updateReg_semesterValiDate),
  Reg_semesterController.updateReg_semister,
);

export const Reg_semesterRouter = router;
