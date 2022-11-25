import { createSlice } from "@reduxjs/toolkit";

type FolderState = {
  folders: any[];
  folder: any;
};

const initialState: FolderState = {
  folders: [],
  folder: {},
};

const folderSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getFolders: (state, action) => {
      state.folders = action.payload;
    },
  },
});

export const { getFolders } = folderSlice.actions;
export default folderSlice.reducer;
