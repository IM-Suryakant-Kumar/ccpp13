import { Link } from "react-router";

const Signup = () => {
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData(e.currentTarget);
		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const password = formData.get("password") as string;
		// signup
		console.log(name, email, password);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="min-h-screen flex justify-center items-center p-4"
		>
			<div className="w-full max-w-sm mx-auto border border-gray-300 rounded p-4 flex flex-col gap-3">
				<h1 className="text-blue-400 text-2xl font-bold text-center mb-4">
					SIGNUP
				</h1>
				<input
					className="border-b border-gray-400"
					type="text"
					name="name"
					placeholder="Name: "
					required
				/>
				<input
					className="border-b border-gray-400"
					type="email"
					name="email"
					placeholder="Email: "
					required
				/>
				<input
					className="border-b border-gray-400"
					type="text"
					name="password"
					placeholder="Password: "
					minLength={3}
					maxLength={8}
					required
				/>
				<button className="bg-black text-white py-1 rouded my-3">Signup</button>
				<p className="text-gray-400 text-sm font-semibold text-center">
					Already have an account{" "}
					<Link className="text-blue-600" to="/login">
						{" "}
						Login
					</Link>
				</p>
			</div>
		</form>
	);
};
export default Signup;
