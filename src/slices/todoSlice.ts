import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState: {
  todoList: {
    id: string;
    project: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    stage: string;
    isDone: boolean;
  }[];
} = {
  todoList: [
    {
      id: nanoid(),
      project: 'Test',
      title: 'First',
      description: 'Cool',
      dueDate: '11/27/2023',
      priority: 'Medium',
      stage: 'Todo',
      isDone: false
    }
  ]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addNewTodo(state, action) {
      state.todoList.push(
        action.payload as {
          id: string;
          project: string;
          title: string;
          description: string;
          dueDate: string;
          priority: string;
          stage: string;
          isDone: boolean;
        }
      );
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(e => e.id !== action.payload);
    }
  }
});

const todoActions = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export { todoActions, todoReducer };
