const Note = ({ note }: { note: { id: string; content: string } }) => {
	const handleEdit = () => {};

	const handleDelete = () => {};

	return (
		<div className="bg-white border border-gray-300 rounded p-4">
			<p className="text-gray-500">{note.content}</p>
			<div className="ml-auto flex justify-between items-center gap-1 mt-4">
				<button className="text-gray-600" onClick={handleEdit}>
					Edit
				</button>
				<button className="text-red-500" onClick={handleDelete}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Note;
