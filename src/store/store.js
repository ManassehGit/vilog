import {configureStore} from '@reduxjs/toolkit';
import host from './hostSlice';
import visitors from './visitorSlice';


const rootReducer = {
    visitor: visitors.reducer,
    host: host.reducer
  }
  
  
  export const store = configureStore({
      reducer: rootReducer
  })