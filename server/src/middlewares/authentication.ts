import { NextFunction, Response } from "express";
import { IRequest } from "../controllers";
import { asyncWrapper } from "./async";
import { UnauthenticatedError } from "../errors";
import { verify } from "jsonwebtoken";
import { User } from "../models";

export const authenticateUser = asyncWrapper(
	async (req: IRequest, res: Response, next: NextFunction) => {
    const token = req.cookies.token;
		// const token = req.headers.authorization?.split(" ")[1];
		if (!token)
			throw new UnauthenticatedError("Authentication invalid.");

		const { userId } = verify(token, process.env.JWT_SECRET!) as {
			userId: string;
		};

		const user = await User.findById(userId);
		if (!user) throw new UnauthenticatedError("Authentication failed.");

		req.user = user;
		next();
	},
);
