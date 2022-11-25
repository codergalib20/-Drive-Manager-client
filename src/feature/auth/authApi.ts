import apiSlice from "../api/apiSlice";
import { userLoggedIn, validateUser } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Sign up endpoint
    signup: builder.mutation({
      query: (body) => ({
        url: "/api/v1/user/signup",
        method: "POST",
        body,
      }),
      //displatch the userLoggedIn action
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem("folder_manager", result.data.token);
          dispatch(userLoggedIn(result.data.token));
        } catch (err) {}
      },
    }),
    loggedinVarification: builder.query({
      query: (data) => ({
        url: "/api/v1/user/validation",
        method: "GET",
        headers: {
          Authorization: "Bearer " + localStorage?.getItem("folder_manager"),
        },
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(validateUser(result.data));
        } catch (err) {}
      },
    }),
    // Sign in endpoint
    signin: builder.mutation({
      query: (body) => ({
        url: "/api/v1/user/signin",
        method: "POST",
        body,
      }),
      //displatch the userLoggedIn action
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          localStorage.setItem("folder_manager", result.data.token);
          dispatch(userLoggedIn(result.data.token));
        } catch (err) {}
      },
    }),
    // Sign out endpoint
  }),
});

export const {
  useSigninMutation,
  useSignupMutation,
  useLoggedinVarificationQuery,
} = authApi;
