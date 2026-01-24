import Note from "./Note";

const Notes = () => {
	const notes = [
		{ id: "1", content: "Note 1" },
		{ id: "2", content: "Note 2" },
		{ id: "3", content: "Note 3" },
		{ id: "4", content: "Note 4" },
		{ id: "5", content: "Note 5" },
	];

	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 mt-8">
			{notes.map((note) => (
				<Note key={note.id} note={note} />
			))}
		</div>
	);
};

export default Notes;
