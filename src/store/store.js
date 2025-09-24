import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './financeSlice.js';

export const store = configureStore({
  reducer: {
    finance: financeReducer,
  },
});
