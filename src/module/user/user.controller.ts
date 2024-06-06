import catchAsync from '../../app/utiles/catchAsyne';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req, res) => {
  const { user: userData, password } = req.body;
  const result = await UserServices.createUserIntoDB(userData, password);

  res.status(200).json({
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const userControllers = {
  createUser,
};
