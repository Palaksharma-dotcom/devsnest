import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import homeReducer from '../features/Home/homeSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    home: homeReducer,
  },
});
