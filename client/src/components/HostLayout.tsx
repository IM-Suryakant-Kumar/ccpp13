import { Navigate, Outlet, useLocation } from "react-router";

const HostLayout = () => {
	const user = true;
	const pathname = useLocation().pathname;

	return user ? (
		<Outlet />
	) : (
		<Navigate
			to="/login"
			state={{ message: "You must login first.", redirectTo: pathname }}
			replace
		/>
	);
};

export default HostLayout;
