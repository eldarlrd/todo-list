import { todoReducer } from '@/slices/todoSlice.ts';

describe('todo reducer', () => {
  const initialState = undefined;

  it('returns the initial state', () => {
    const action = { type: '' };
    const result = todoReducer(initialState, action);
    expect(result).toStrictEqual({
      todoList: [],
      get viewMode() {
        return sessionStorage.view ? (sessionStorage.view as string) : 'All';
      },
      get sortMode() {
        return sessionStorage.sort ? (sessionStorage.sort as string) : 'Title';
      },
      get sortAscending() {
        return sessionStorage.ascending ? +sessionStorage.ascending : 0;
      }
    });
  });
});
