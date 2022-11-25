import apiSlice from "../api/apiSlice";
import { getFolders } from "./folderSlice";

export const folderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Add a new endpoint called `getFolderById`
    getFolderByEmail: builder.query({
      query: ({ email, parent }: any) => `/api/v1/folders/${email}/${parent}`,
      keepUnusedDataFor: 600,
      providesTags: ["Folder"],
      // Loaded folder save to the cache on success
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          dispatch(getFolders((result as any)?.data.data));
        } catch (err) {}
      },
    }),
    // Add a new endpoint called `getFolders`
    getFolders: builder.query({
      query: () => `/api/v1/folders`,
    }),
    // Add a new endpoint called `createFolder`
    addFolder: builder.mutation({
      query: (body) => ({
        url: `/api/v1/folders`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Folder"],
    }),
    // Add a new endpoint called `updateFolder`
    updateFolder: builder.mutation({
      query: ({ folder, id }) => ({
        url: `/api/v1/folders/id/${id}`,
        method: "PATCH",
        body: folder,
      }),
      invalidatesTags: ["Folder"],
    }),
    // Add a new endpoint called `deleteFolder`
    deleteFolder: builder.mutation({
      query: (id) => ({
        url: `/api/v1/folders/id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Folder"],
    }),
  }),
});

export const {
  useGetFolderByEmailQuery,
  useGetFoldersQuery,
  useAddFolderMutation,
  useUpdateFolderMutation,
  useDeleteFolderMutation,
} = folderApi;
