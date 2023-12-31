import { nanoid } from 'nanoid';

import { PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { projectActions, projectReducer } from '@/slices/projectSlice.ts';

describe('project reducer', () => {
  const {
    sortProjects,
    addNewProject,
    setSelectedProject,
    editProject,
    deleteProject
  } = projectActions;
  const initialState = undefined;
  const projectId = nanoid();
  const project = {
    id: projectId,
    title: 'New Project',
    iconKey: PROJECT_ICONS[1].key
  };

  it('returns the initial state', () => {
    const action = { type: '' };
    const result = projectReducer(initialState, action);
    expect(result).toStrictEqual({
      projectList: [],
      selectedProject: ''
    });
  });

  it('sorts all projects', () => {
    const action = sortProjects([project]);
    const result = projectReducer(initialState, action);
    expect(result.projectList).toContainEqual(project);
  });

  it('adds a new project', () => {
    const action = addNewProject(project);
    const result = projectReducer(initialState, action);
    expect(result.projectList).toContainEqual(project);
  });

  it('selects a project', () => {
    const action = setSelectedProject(projectId);
    const result = projectReducer(initialState, action);
    expect(result.selectedProject).toBe(projectId);
  });

  it('edits a project', () => {
    const addAction = addNewProject(project);
    const addResult = projectReducer(initialState, addAction);

    const editedProject = {
      id: projectId,
      title: 'Edited Project',
      iconKey: PROJECT_ICONS[2].key
    };
    const editAction = editProject(editedProject);
    const editResult = projectReducer(addResult, editAction);
    expect(editResult.projectList).toContainEqual(editedProject);
  });

  it('deletes a project', () => {
    const addAction = addNewProject(project);
    const addResult = projectReducer(initialState, addAction);

    const deleteAction = deleteProject(projectId);
    const deletedResult = projectReducer(addResult, deleteAction);
    expect(deletedResult.projectList).not.toContainEqual(project);
  });
});
