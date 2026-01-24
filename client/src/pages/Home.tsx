import { AddNote, Notes } from "../components";

const Home = () => {
	return (
		<div className="p-4">
			<AddNote />
			<Notes />
		</div>
	);
};

export default Home;
