import { plainToClass } from "class-transformer";
import { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";

export class RequestValidator {
    //@ts-ignore
  static validate = (classInstance) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const data = plainToClass(classInstance, req.body);

      await validate(data).then((errors) => {
        // errors is an array of validation errors
        if (errors.length > 0) {
          let rawErrors: string[] = [];
          for (const errorItem of errors) {
            console.log(errorItem.constraints);
            rawErrors.push(...Object.values(errorItem.constraints ?? ""));
          }
          next(res.status(500).json(rawErrors[0]));
        }
      });

      // If not error is found.
      next();
    };
  };
}