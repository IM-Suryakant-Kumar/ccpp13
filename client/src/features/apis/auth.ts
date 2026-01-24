import { getToken } from "../../utils";
import { api } from "../api";

const auth = api.injectEndpoints({
	endpoints: (build) => ({
		getProfile: build.query<SuccessResponse, void>({
			query: () => ({
				url: "/auth/me",
				method: "GET",
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			providesTags: (result) =>
				result ? [{ type: "Auth", id: "LIST" }] : ["Auth"],
		}),
	}),
});
