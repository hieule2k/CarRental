import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const checkIndexSlice = createSlice({
  name: 'currentIndex',
  initialState,
  reducers: {
    setIndex: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setIndex } = checkIndexSlice.actions;

export default checkIndexSlice.reducer;
