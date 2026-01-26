import { useState } from "react";
import { useDeleteNoteMutation, useUpdateNoteMutation } from "../features/apis";

const Note = ({ note }: { note: INote }) => {
	const [updateNote, { isLoading: isUpdateNoteLoading }] =
		useUpdateNoteMutation();
	const [deleteNote, { isLoading: isDeleteNoteLoading }] =
		useDeleteNoteMutation();
	const [showModal, setShowModal] = useState(false);
	const [content, setContent] = useState(note.content);

	return (
		<div className="bg-white border border-gray-300 rounded p-4">
			{showModal && (
				<div className="fixed left-0 top-0 right-0 bottom-0 bg-[#00000050] min-h-screen flex justify-center items-center">
					<div
						className="absolute -z-10 w-full h-full"
						onClick={() => setShowModal(false)}
					/>
					<form
						onSubmit={() => updateNote({ _id: note._id, content } as INote)}
						className="p-4 border border-gray-300 rounded bg-white w-xs flex flex-col gap-2"
					>
						<textarea
							className="w-full h-full bg-gray-200 rounded-sm"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
						<button
							className="bg-blue-400 text-white py-1 px-4 border rounded ml-auto"
							disabled={isUpdateNoteLoading}
						>
							Update
						</button>
					</form>
				</div>
			)}
			<p className="text-gray-500">{note.content}</p>
			<div className="ml-auto flex justify-between items-center gap-1 mt-4">
				<button
					className="text-gray-600"
					onClick={() => setShowModal((prev) => !prev)}
				>
					Edit
				</button>
				<button
					className="text-red-500"
					onClick={() => deleteNote({ _id: note._id } as INote)}
					disabled={isDeleteNoteLoading}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Note;
