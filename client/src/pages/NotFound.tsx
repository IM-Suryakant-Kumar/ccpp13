import { Link } from "react-router";

const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-4 text-center p-4">
			<h2 className="text-gray-600 text-2xl">404 - PAGE NOT FOUND!</h2>
			<Link
				className="bg-gray-800 text-white py-1 px-8 border border-gray-300 rounded"
				to="/"
				replace
			>
				Home
			</Link>
		</div>
	);
};

export default NotFound;
