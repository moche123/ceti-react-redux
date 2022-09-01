import { configureStore } from '@reduxjs/toolkit';
import votationReducer from '../features/portfolio/portfolioSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    votation: votationReducer
  },
});
