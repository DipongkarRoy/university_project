import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';

const createUser = async (req: Request, res: Response ,next:NextFunction) => {
  try {
    const {user: userData ,password} = req.body;
    const result = await UserServices.createUserIntoDB(userData ,password);

    res.status(200).json({
      success: true,
      message: 'Student is created succesfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

export const userControllers = {
  createUser,
};
