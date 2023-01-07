import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './CustomReducers/CounterSlice';
import dataReducer from './CustomReducers/DataSlice';

export default configureStore({
  reducer: {
    counter:counterReducer,
    data:dataReducer,
    },
})