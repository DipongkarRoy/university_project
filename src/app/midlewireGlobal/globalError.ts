import { NextFunction, Request ,Response } from "express";

const globalError =(error: any, req: Request, res: Response, next: NextFunction) => {
    try {
      return res.status(500).json({
        success: false,
        massage: 'something went worng',
        error: error,
      });
    } catch (error) {
      next(error);
    }
  }

  export default globalError ;