import { Response } from "express";
import { IUser } from "../models/User";

export const sendToken = (
	res: Response,
	statusCode: number,
	message: string,
	user: IUser,
) => {
	const token = user.createJWTToken();
	res
		.cookie("token", token, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "none",
		})
		.status(statusCode)
		.json({ message, user });
};
