import { configureStore, createSlice } from "@reduxjs/toolkit";

let like = createSlice({
  name: "like-list",
  initialState: [],
  reducers: {
    addLikeItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { addLikeItem } = like.actions;

export default configureStore({
  reducer: {
    like: like.reducer,
  },
});
