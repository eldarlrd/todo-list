import { STAGE_OPTIONS } from '@/components/modals/addTodo';
import { createSlice } from '@reduxjs/toolkit';

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
  todoList: []
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    checkTodo(state, action) {
      const { id, isDone } = action.payload as { id: string; isDone: boolean };
      const checkedTodo = state.todoList.find(e => e.id === id);
      if (checkedTodo) {
        checkedTodo.isDone = isDone;
        if (isDone) checkedTodo.stage = STAGE_OPTIONS[2];
        else checkedTodo.stage = STAGE_OPTIONS[0]
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
      }
    },

    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(e => e.id !== action.payload);
    }
  }
});

const todoActions = todoSlice.actions;
const todoReducer = todoSlice.reducer;

export { todoActions, todoReducer };
