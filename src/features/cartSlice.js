import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItemExist = state.data.find(
        (item) => item.id === action.payload.id
      );
      if (isItemExist) {
        alert('This Item Already in cart');
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
        state.totalPrice += parseInt(action.payload.price);
      }
    },
    removeCart: (state, action) => {
      const removeItem = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      state.data = removeItem;
      state.totalPrice -= parseInt(action.payload.price);
    },
    removeAll(state) {
      state.data = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeCart, removeAll } = cartSlice.actions;

export default cartSlice.reducer;
