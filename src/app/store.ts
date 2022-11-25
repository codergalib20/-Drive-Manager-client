import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../feature/api/apiSlice";
import authSliceReducer from "../feature/auth/authSlice";
import folderSliceReducer from "../feature/folders/folderSlice";
export const store = configureStore({
  reducer: {
    // Add your reducers here
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    folders: folderSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
