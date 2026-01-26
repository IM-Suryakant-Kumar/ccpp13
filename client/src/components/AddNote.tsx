import { useState } from "react";
import { useCreateNoteMutation } from "../features/apis";

const AddNote = () => {
	const [createNote, { isLoading }] = useCreateNoteMutation();
	const [note, setNote] = useState("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		createNote({ content: note } as INote);
		setNote("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="w-full sm:max-w-md sm:mx-auto border border-gray-300 rounded flex"
		>
			<input
				className="w-4/5"
				type="text"
				name=""
				id=""
				placeholder="Write note..."
				value={note}
				onChange={(e) => setNote(e.target.value)}
			/>
			<button className="w-1/5 bg-black text-white" disabled={isLoading}>
				Add
			</button>
		</form>
	);
};

export default AddNote;
