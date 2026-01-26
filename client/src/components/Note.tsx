import { useDeleteNoteMutation, useUpdateNoteMutation } from "../features/apis";

const Note = ({ note }: { note: INote }) => {
	// const [updateNote, { isLoading: isUpdateNoteLoading }] =
	// 	useUpdateNoteMutation();
	const [deleteNote, { isLoading: isDeleteNoteLoading }] =
		useDeleteNoteMutation();
	const handleEdit = () => {};

	return (
		<div className="bg-white border border-gray-300 rounded p-4">
			<p className="text-gray-500">{note.content}</p>
			<div className="ml-auto flex justify-between items-center gap-1 mt-4">
				<button className="text-gray-600" onClick={handleEdit}>
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
