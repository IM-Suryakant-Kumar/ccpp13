import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { User } from "../models";
import { sendToken } from "../utils";
import { BadRequestError } from "../errors";
import { IUser } from "../models/User";

export interface IRequest extends Request {
	user?: IUser;
}

export const signup = asyncWrapper(async (req: Request, res: Response) => {
	const user = await User.create(req.body);
	sendToken(res, 201, "Signed up Successfully.", user);
});

export const login = asyncWrapper(async (req: Request, res: Response) => {
	const { email, password } = req.body;
	if (!email || !password) throw new BadRequestError("Invalid credentials.");

	const user = await User.findOne({ email: req.body.email }).select(
		"+password",
	);
	if (!user) throw new BadRequestError("Invalid credentials.");

	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) throw new BadRequestError("Invalid credentials.");

	sendToken(res, 200, "Logged in successfully.", user);
});

export const logout = asyncWrapper(async (req: Request, res: Response) => {
	res.status(200).json({ message: "Logged out successfully" });
});

export const getProfile = asyncWrapper(async (req: IRequest, res: Response) => {
	res.status(200).json({ user: req.user });
});

export const updateProfile = asyncWrapper(
	async (req: IRequest, res: Response) => {
		await User.findByIdAndUpdate(req.user?._id, req.body);
		res.status(200).json({ message: "User updated successfully" });
	},
);
