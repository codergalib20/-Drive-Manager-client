import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://drive-manager-server.onrender.com",
    prepareHeaders: (headers, { getState, endpoint }) => {
      const token = (getState() as any)?.auth?.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["Auth", "Folder", "AFolder"],
  endpoints: (builder) => ({}),
});
export default apiSlice;
