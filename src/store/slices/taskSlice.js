// authSlice.js
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  taskList: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.taskList = [...state.taskList, action.payload];
    },
    markTaskComplete: (state, action) => {
      const updatedList = state.taskList?.filter(
        task => task?.id !== action.payload,
      );
      state.taskList = updatedList;
    },
  },
});

export const {addTask, markTaskComplete} = taskSlice.actions;
export default taskSlice.reducer;
