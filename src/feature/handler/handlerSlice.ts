import { createSlice } from "@reduxjs/toolkit";

interface HandlerState {
  editor: boolean;
}

const initialState: HandlerState = {
  editor: false,
};

export const handlerSlice = createSlice({
  name: "handler",
  initialState,
  reducers: {
    setEditor: (state, action) => {
      state.editor = action.payload;
    },
  },
});

export const { setEditor } = handlerSlice.actions;
export default handlerSlice.reducer;
