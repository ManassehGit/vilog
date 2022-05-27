import {configureStore} from '@reduxjs/toolkit';
import host from './hostSlice';
import visitors from './visitorSlice';


const rootReducer = {
    visitors: visitors.reducer,
    hosts: host.reducer
  }
  
  
  export const store = configureStore({
      reducer: rootReducer
  })