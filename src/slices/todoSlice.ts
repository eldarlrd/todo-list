import { createSlice } from '@reduxjs/toolkit';

import { SORT_OPTIONS } from '@/components/controls/sortMenu.tsx';
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

    // Checks and Pushes to Done
    checkTodo(state, action) {
      const { id, isDone } = action.payload as { id: string; isDone: boolean };
      const checkedTodo = state.todoList.find(e => e.id === id);
      if (checkedTodo) {
        checkedTodo.isDone = isDone;
        isDone ?
          (checkedTodo.stage = STAGE_OPTIONS[2])
        : (checkedTodo.stage = STAGE_OPTIONS[1]);
      }
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
        editedTodo.project = project;
        editedTodo.title = title;
        editedTodo.description = description;
        editedTodo.dueDate = dueDate;
        editedTodo.priority = priority;
        editedTodo.stage = stage;
        // Checks and Pushes to Done
        stage === STAGE_OPTIONS[2] ?
          (editedTodo.isDone = true)
        : (editedTodo.isDone = false);
      }
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(e => e.id !== action.payload);
    },

    // Deletes Todos associated with a deleted Project
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
