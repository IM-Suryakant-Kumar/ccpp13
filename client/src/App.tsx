import { createBrowserRouter, RouterProvider } from "react-router";
import { AuthLayout, HostLayout, Layout } from "./components";
import { Home, Login, NotFound, Signup } from "./pages";

const App = () => {
	const router = createBrowserRouter([
		{
			Component: Layout,
			children: [
				{ Component: HostLayout, children: [{ path: "/", Component: Home }] },
				{
					Component: AuthLayout,
					children: [
						{ path: "/login", Component: Login },
						{ path: "/signup", Component: Signup },
					],
				},
			],
		},
		{ path: "*", Component: NotFound },
	]);

	return <RouterProvider router={router} />;
};

export default App;
