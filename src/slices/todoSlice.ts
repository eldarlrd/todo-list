import { createSlice } from '@reduxjs/toolkit';

import { VIEW_OPTIONS } from '@/components/controls/viewMenu.tsx';
import { STAGE_OPTIONS } from '@/components/modals/addTodo.tsx';

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
  viewMode: string;
} = {
  todoList: [],
  get viewMode() {
    return sessionStorage.view
      ? (sessionStorage.view as string)
      : VIEW_OPTIONS[0];
  }
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setViewMode(state, action) {
      state.viewMode = action.payload as string;
      sessionStorage.setItem('view', action.payload as string);
    },

    checkTodo(state, action) {
      const { id, isDone } = action.payload as { id: string; isDone: boolean };
      const checkedTodo = state.todoList.find(e => e.id === id);
      if (checkedTodo) {
        checkedTodo.isDone = isDone;
        isDone
          ? (checkedTodo.stage = STAGE_OPTIONS[2])
          : (checkedTodo.stage = STAGE_OPTIONS[1]);
      }
    },

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

    editTodo(state, action) {
      const { id, project, title, description, dueDate, priority, stage } =
        action.payload as {
          id: string;
          project: string;
          title: string;
          description: string;
          dueDate: string;
          priority: string;
          stage: string;
        };
      const editedTodo = state.todoList.find(e => e.id === id);
      if (editedTodo) {
        editedTodo.title = title;
        editedTodo.project = project;
        editedTodo.description = description;
        editedTodo.dueDate = dueDate;
        editedTodo.priority = priority;
        editedTodo.stage = stage;
        stage === STAGE_OPTIONS[2]
          ? (editedTodo.isDone = true)
          : (editedTodo.isDone = false);
      }
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(e => e.id !== action.payload);
    },

    deleteProjectTodos(state, action) {
      state.todoList = state.todoList.filter(
        e =>
          !(
            action.payload as {
              id: string;
              project: string;
              title: string;
              description: string;
              dueDate: string;
              priority: string;
              stage: string;
              isDone: boolean;
            }[]
          ).some(elem => elem.id === e.id)
      );
    }
  }
});

const todoActions = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export { todoActions, todoReducer };
