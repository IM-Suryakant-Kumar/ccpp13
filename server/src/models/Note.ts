import { model, Schema } from "mongoose";

export interface INote {
	user: Schema.Types.ObjectId;
	content: string;
}

const NoteSchema = new Schema<INote>(
	{
		user: { type: Schema.Types.ObjectId, ref: "User" },
		content: { type: String, required: [true, "Please provide content"] },
	},
	{ timestamps: true },
);

export const Note = model<INote>("Note", NoteSchema);
