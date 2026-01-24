const NotFound = () => {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-4 text-center p-4">
			<h2 className="text-gray-600 text-2xl">404 - PAGE NOT FOUND!</h2>
			<button className="bg-gray-800 text-white py-1 px-8 border border-gray-300 rounded">
				Home
			</button>
		</div>
	);
};

export default NotFound;
