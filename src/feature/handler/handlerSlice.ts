import { createSlice } from "@reduxjs/toolkit";

interface HandlerState {
  isEditor: boolean;
  isAddFolder: boolean;
}

const initialState: HandlerState = {
  isEditor: false,
  isAddFolder: false,
};

export const handlerSlice = createSlice({
  name: "handler",
  initialState,
  reducers: {
    handleEditor: (state, action) => {
      state.isEditor = !state.isEditor;
    },
    handleAddFolder: (state, action) => {
      state.isAddFolder = !state.isAddFolder;
    },
  },
});

export const { handleEditor, handleAddFolder } = handlerSlice.actions;
export default handlerSlice.reducer;
