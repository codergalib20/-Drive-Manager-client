import apiSlice from "../api/apiSlice";

export const folderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Add a new endpoint called `getFolderById`
    getFolderById: builder.query({
      query: (folderId) => `folders/${folderId}`,
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
    }),
  }),
});
