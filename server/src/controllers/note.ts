import { Request, Response } from "express";
import { asyncWrapper } from "../middlewares";
import { Note } from "../models";

export const createNote = asyncWrapper(async (req: Request, res: Response) => {
	const note = await Note.create(req.body);
	res.status(201).json({ message: "Note Added Successfully" });
});

export const getNotes = asyncWrapper(async (req: Request, res: Response) => {
	const notes = await Note.find();
	res.status(201).json({ notes });
});

export const updateNote = asyncWrapper(async (req: Request, res: Response) => {
	const note = await Note.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.status(201).json({ message: "Note updated successfully" });
});

export const deleteNote = asyncWrapper(async (req: Request, res: Response) => {
	await Note.findByIdAndDelete(req.params.id);
	res.status(201).json({ message: "Note deleted successfully" });
});
