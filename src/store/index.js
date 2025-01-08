import {configureStore } from '@reduxjs/toolkit';
import counterSlice from './conter';
import authSlice from './auth';

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
