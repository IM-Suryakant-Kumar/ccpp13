import { useGetNotesQuery } from "../features/apis";
import Note from "./Note";

const Notes = () => {
	const { data, isLoading } = useGetNotesQuery();
  
	return (
		<div className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 mt-8">
			{isLoading? <h1>Loding...</h1> : data?.notes?.map((note) => (
				<Note key={note._id} note={note} />
			))}
		</div>
	);
};

export default Notes;
