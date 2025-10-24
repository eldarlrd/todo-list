import { createSlice } from '@reduxjs/toolkit';

import { SORT_OPTIONS } from '@/components/controls/sortMenu.tsx';
import { STAGE_OPTIONS, VIEW_OPTIONS } from '@/config/options.ts';

interface TodoDetails {
  id: string;
  project: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  stage: string;
  isDone: boolean;
}

const initialState: {
  todoList: TodoDetails[];
  viewMode: string;
  sortMode: string;
  sortAscending: number;
} = {
  todoList: [],
  viewMode: VIEW_OPTIONS[0],
  sortMode: Object.keys(SORT_OPTIONS)[0],
  sortAscending: 0
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setTodos(state, action) {
      state.todoList = action.payload as TodoDetails[];
    },

    setViewMode(state, action) {
      state.viewMode = action.payload as string;
    },

    setSortMode(state, action) {
      state.sortMode = action.payload as string;
    },

    setSortAscending(state, action) {
      state.sortAscending = action.payload as number;
    },

    addNewTodo(state, action) {
      state.todoList.push(action.payload as TodoDetails);
    },

    // Checks & pushes to Done
    checkTodo(state, action) {
      const { id, isDone } = action.payload as { id: string; isDone: boolean };
      const checkedTodo = state.todoList.find(t => t.id === id);

      if (checkedTodo) {
        checkedTodo.isDone = isDone;
        if (isDone) checkedTodo.stage = STAGE_OPTIONS[2];
        else checkedTodo.stage = STAGE_OPTIONS[1];
      }
    },

    editTodo(state, action) {
      const { id, project, title, description, dueDate, priority, stage } =
        action.payload as TodoDetails;
      const editedTodo = state.todoList.find(t => t.id === id);

      if (editedTodo) {
        editedTodo.project = project;
        editedTodo.title = title;
        editedTodo.description = description;
        editedTodo.dueDate = dueDate;
        editedTodo.priority = priority;
        editedTodo.stage = stage;
        // Checks & pushes to Done
        editedTodo.isDone = stage === STAGE_OPTIONS[2];
      }
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(t => t.id !== action.payload);
    },

    // Deletes Todos associated with a deleted Project
    deleteProjectTodos(state, action) {
      state.todoList = state.todoList.filter(
        t => t.project !== (action.payload as string)
      );
    }
  }
});

const todoActions = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export { type TodoDetails, todoActions, todoReducer };
