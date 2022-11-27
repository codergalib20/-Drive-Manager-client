import { createSlice } from "@reduxjs/toolkit";

interface HandlerState {
  isEditor: any;
  isAddFolder: boolean;
}

const initialState: HandlerState = {
  isEditor: null,
  isAddFolder: false,
};

export const handlerSlice = createSlice({
  name: "handler",
  initialState,
  reducers: {
    handleEditor: (state, action) => {
      state.isEditor = action.payload;
    },
    handleAddFolder: (state, action) => {
      state.isAddFolder = !state.isAddFolder;
    },
  },
});

export const { handleEditor, handleAddFolder } = handlerSlice.actions;
export default handlerSlice.reducer;
