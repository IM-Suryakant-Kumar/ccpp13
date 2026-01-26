import { getToken } from "../../utils";
import { api } from "../api";

const note = api.injectEndpoints({
	endpoints: (build) => ({
		getNotes: build.query<SuccessResponse, void>({
			query: () => ({
				url: "/note",
				method: "GET",
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			providesTags: ["Note"],
		}),
		createNote: build.mutation<SuccessResponse, INote>({
			query: (body) => ({
				url: "/note",
				method: "POST",
				body,
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			invalidatesTags: (result) => (result ? ["Note"] : []),
		}),
		updateNote: build.mutation<SuccessResponse, INote>({
			query: (body) => ({
				url: `/note/${body._id}`,
				method: "PATCH",
				body,
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			invalidatesTags: (result) => (result ? ["Note"] : []),
		}),
		deleteNote: build.mutation<SuccessResponse, INote>({
			query: (body) => ({
				url: `/note/${body._id}`,
				method: "DELETE",
				body,
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			}),
			invalidatesTags: (result) => (result ? ["Note"] : []),
		}),
	}),
});

export const {
	useGetNotesQuery,
	useCreateNoteMutation,
	useUpdateNoteMutation,
	useDeleteNoteMutation,
} = note;
