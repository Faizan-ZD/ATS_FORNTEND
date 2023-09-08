import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  loading: false,
  value: 0,
} as any;

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
   increment: (state) => {
    state.value ++
   }
  },
});

export const { increment } = userSlice.actions;
export default userSlice.reducer;
