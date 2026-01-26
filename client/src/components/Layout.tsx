import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "../features/store";

const Layout = () => {
	return (
		<Provider store={store}>
			<Outlet />
		</Provider>
	);
};

export default Layout;
