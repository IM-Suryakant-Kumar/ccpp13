import { useState } from "react";

const AddNote = () => {
	const [note, setNote] = useState("");
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
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
			<button className="w-1/5 bg-black text-white">Add</button>
		</form>
	);
};

export default AddNote;
