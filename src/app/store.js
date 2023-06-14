import { configureStore } from '@reduxjs/toolkit';
import checkIndexReducer from '../features/checkIndexSlice';
import cartReducer from '../features/cartSlice';
import postsReducer from '../features/postsSlice';
import usersReducer from '../features/usersSlice';
import carsReducer from '../features/carSlice';

export const store = configureStore({
  reducer: {
    currentIndex: checkIndexReducer,
    cart: cartReducer,
    posts: postsReducer,
    users: usersReducer,
    cars: carsReducer,
  },
});
