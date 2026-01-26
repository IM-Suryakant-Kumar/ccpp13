import { Navigate, Outlet, useLocation } from "react-router";
import { useGetProfileQuery } from "../features/apis";

const HostLayout = () => {
	const { isLoading, isSuccess } = useGetProfileQuery();
	const pathname = useLocation().pathname;

	return isLoading ? (
		<h1>Loding...</h1>
	) : isSuccess ? (
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
