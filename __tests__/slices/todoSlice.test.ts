import { todoActions, todoReducer } from '@/slices/todoSlice.ts';

describe('todo reducer', () => {
  const { setViewMode } = todoActions;
  const initialState = undefined;

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
});
