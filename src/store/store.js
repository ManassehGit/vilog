import {configureStore} from '@reduxjs/toolkit';

const rootReducer = {
    visitor: visitor.reducer,
    host: host.reducer
  }
  
  
  export const store = configureStore({
      reducer: rootReducer
  })