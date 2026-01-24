import { NextFunction, Request, Response } from "express";

export const errorHandlerMiddleware = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const customError = {
		statusCode: err.statusCode || 500,
		message: err.message || "Something went wrong. try again.",
	};

	res.status(customError.statusCode).json({ message: customError.message });
};
