import { createSlice } from '@reduxjs/toolkit';

const initialState={
  arr: [], 
  disablBtn: true, 
}
let i = 60;
export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {

    change: (state,action) => {
    i += 1;
      state.arr.push({"name": action.payload.name, "price": action.payload.price, key:i});
      state.disablBtn = false;
    },
  },
});

export const { change } = orderSlice.actions;
export default orderSlice.reducer;
