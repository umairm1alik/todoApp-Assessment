// store.js
import {combineReducers, configureStore} from '@reduxjs/toolkit';
import taskSlice from './slices/taskSlice';

const rootReducer = combineReducers({
  task: taskSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
