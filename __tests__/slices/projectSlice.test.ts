import { nanoid } from 'nanoid';

import { projectActions, projectReducer } from '@/slices/projectSlice.ts';

describe('project reducer', () => {
  const { setSelectedProject } = projectActions;

  it('returns the initial state when passed an empty action', () => {
    const initialState = undefined;
    const action = { type: '' };
    const result = projectReducer(initialState, action);
    expect(result).toStrictEqual({
      projectList: [],
      get selectedProject() {
        return this.projectList[0];
      }
    });
  });

  it('sets a selected project', () => {
    const initialState = undefined;
    const projectId = nanoid();
    const action = setSelectedProject(projectId);
    const result = projectReducer(initialState, action);
    expect(result.selectedProject).toBe(projectId);
  });
});
