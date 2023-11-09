import { formatISO } from 'date-fns';
import { nanoid } from 'nanoid';

import { todoActions, todoReducer } from '@/slices/todoSlice.ts';

describe('todo reducer', () => {
  const {
    setViewMode,
    setSortMode,
    setSortAscending,
    addNewTodo,
    checkTodo,
    editTodo,
    deleteTodo,
    deleteProjectTodos
  } = todoActions;
  const initialState = undefined;
  const todoId = nanoid();

  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowFormatted = formatISO(tomorrow, { representation: 'date' });

  const todo = {
    id: todoId,
    project: 'Default',
    title: 'New Todo',
    description: 'Test this todo',
    dueDate: tomorrowFormatted,
    priority: 'High',
    stage: 'In Progress',
    isDone: false
  };

  it('returns the initial state', () => {
    const action = { type: '' };
    const result = todoReducer(initialState, action);
    expect(result).toStrictEqual({
      todoList: [],
      viewMode: 'All',
      sortMode: 'Title',
      sortAscending: 0
    });
  });

  it('sets the view mode', () => {
    const action = setViewMode('Todo');
    const result = todoReducer(initialState, action);
    expect(result.viewMode).toBe('Todo');
  });

  it('sets the sort mode', () => {
    const action = setSortMode('Priority');
    const result = todoReducer(initialState, action);
    expect(result.sortMode).toBe('Priority');
  });

  it('sets the sort ascending or descending', () => {
    const action = setSortAscending(1);
    const result = todoReducer(initialState, action);
    expect(result.sortAscending).toBe(1);
  });

  it('adds a new todo', () => {
    const action = addNewTodo(todo);
    const result = todoReducer(initialState, action);
    expect(result.todoList).toContainEqual(todo);
  });

  it('checks todo and pushes it to done stage', () => {
    const addAction = addNewTodo(todo);
    const addResult = todoReducer(initialState, addAction);

    const action = checkTodo(todo);
    const result = todoReducer(addResult, action);
    expect(result.todoList[0].isDone).toBe(false);

    const checkedTodo = {
      ...todo,
      isDone: true
    };
    const checkedAction = checkTodo(checkedTodo);
    const checkedResult = todoReducer(result, checkedAction);
    expect(checkedResult.todoList[0].isDone).toBe(true);
  });

  it('edits a todo', () => {
    const addAction = addNewTodo(todo);
    const addResult = todoReducer(initialState, addAction);

    const editedTodo = {
      id: todoId,
      project: 'Default',
      title: 'Edited Todo',
      description: 'Edit this todo',
      dueDate: tomorrowFormatted,
      priority: 'Medium',
      stage: 'Todo',
      isDone: false
    };
    const editAction = editTodo(editedTodo);
    const editResult = todoReducer(addResult, editAction);
    expect(editResult.todoList).toContainEqual(editedTodo);

    const checkedTodo = {
      ...editedTodo,
      stage: 'Done',
      isDone: true
    };
    const checkedAction = editTodo(checkedTodo);
    const checkedResult = todoReducer(editResult, checkedAction);
    expect(checkedResult.todoList).toContainEqual(checkedTodo);
  });

  it('deletes a todo', () => {
    const addAction = addNewTodo(todo);
    const addResult = todoReducer(initialState, addAction);

    const deleteAction = deleteTodo(todoId);
    const deleteResult = todoReducer(addResult, deleteAction);
    expect(deleteResult.todoList).not.toContainEqual(todo);
  });

  it('deletes all todos associated with a project', () => {
    const addAction = addNewTodo(todo);
    const addResult = todoReducer(initialState, addAction);

    const deleteProjectAction = deleteProjectTodos([todo]);
    const deleteProjectResult = todoReducer(addResult, deleteProjectAction);
    expect(deleteProjectResult.todoList).not.toContainEqual(todo);
  });
});
