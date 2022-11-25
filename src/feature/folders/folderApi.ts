import apiSlice from "../api/apiSlice";

export const folderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Add a new endpoint called `getFolderById`
    getFolderByEmail: builder.query({
      query: ({ email, parent }: any) => `/api/v1/folders/${email}/${parent}`,
      keepUnusedDataFor: 600,
      providesTags: ["Folder"],
    }),
    // Add a new endpoint called `getFolders`
    getFolders: builder.query({
      query: () => `folders`,
    }),
    // Add a new endpoint called `createFolder`
    createFolder: builder.mutation({
      query: (folder) => ({
        url: `folders`,
        method: "POST",
        body: folder,
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
  useCreateFolderMutation,
  useUpdateFolderMutation,
  useDeleteFolderMutation,
} = folderApi;
