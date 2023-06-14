import { createSlice } from '@reduxjs/toolkit';
import carsdata from '../data/cars/carsDetail.json';

const initialState = {
  data: carsdata,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setCarsData(state, action) {
      state.data = action.payload;
    },
    searchResults(state, action) {
      const result = state.data.filter(
        (item) =>
          item.name
            .toUpperCase()
            .split(' ')
            .join('')
            .indexOf(action.payload.split(' ').join('').toUpperCase()) !== -1
      );
      if (result) {
        state.data = result;
      }
    },
  },
});

export const { searchResults, setCarsData } = carsSlice.actions;

export default carsSlice.reducer;
