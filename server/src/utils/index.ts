import { Response } from "express";
import { IUser } from "../models/User";

export const sendToken = (
	res: Response,
	statusCode: number,
	message: string,
	user: IUser,
) => {
	const token = user.createJWTToken();
	res.status(statusCode).json({ message, token, user });
};
