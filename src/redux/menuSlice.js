import { createSlice } from '@reduxjs/toolkit';

const initialState={
  dataLoadState: 0, 
  dataLoadError: null,
  data: null,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {

    updateLoadState: (state,action) => {
      state.dataLoadState = action.payload.state;
      state.dataLoadError = action.payload.error;
    },

    updateData: (state,action) => {
      state.data = action.payload;
    },

  },
});

export const { updateLoadState, updateData } = menuSlice.actions;
export default menuSlice.reducer;
