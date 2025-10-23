import { useCallback } from 'preact/hooks';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import * as fsService from '@/lib/firestore.ts';
import { type ProjectDetails, projectActions } from '@/slices/projectSlice.ts';
import { type TodoDetails, todoActions } from '@/slices/todoSlice.ts';

interface SyncTools {
  createProject: (project: Omit<ProjectDetails, 'id'>) => Promise<string>;
  modifyProject: (project: ProjectDetails) => Promise<void>;
  removeProject: (projectId: string) => Promise<void>;
  createTodo: (todo: Omit<TodoDetails, 'id'>) => Promise<string>;
  modifyTodo: (todo: TodoDetails) => Promise<void>;
  removeTodo: (todoId: string) => Promise<void>;
  syncProjects: (projects: ProjectDetails[]) => Promise<void>;
  syncTodos: (todos: TodoDetails[]) => Promise<void>;
}

export const useStateSync = (): SyncTools => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.authReducer);
  const { addNewProject, editProject, deleteProject } = projectActions;
  const { addNewTodo, editTodo, deleteTodo, deleteProjectTodos } = todoActions;

  const uid = user?.uid;

  const createProject = useCallback(
    async (project: Omit<ProjectDetails, 'id'>) => {
      if (!uid) throw new Error('User not authenticated');

      const id = await fsService.addProject(uid, project);

      dispatch(addNewProject({ ...project, id }));

      return id;
    },
    [uid, dispatch, addNewProject]
  );

  const modifyProject = useCallback(
    async (project: ProjectDetails) => {
      if (!uid) throw new Error('User not authenticated');

      const { id, ...updates } = project;

      await fsService.updateProject(uid, id, updates);

      dispatch(editProject(project));
    },
    [uid, dispatch, editProject]
  );

  const removeProject = useCallback(
    async (projectId: string) => {
      if (!uid) throw new Error('User not authenticated');

      await fsService.deleteProject(uid, projectId);
      dispatch(deleteProject(projectId));
      dispatch(deleteProjectTodos(projectId));
    },
    [uid, dispatch, deleteProject, deleteProjectTodos]
  );

  const createTodo = useCallback(
    async (todo: Omit<TodoDetails, 'id'>) => {
      if (!uid) throw new Error('User not authenticated');

      const id = await fsService.addTodo(uid, todo);

      dispatch(addNewTodo({ ...todo, id }));

      return id;
    },
    [uid, dispatch, addNewTodo]
  );

  const modifyTodo = useCallback(
    async (todo: TodoDetails) => {
      if (!uid) throw new Error('User not authenticated');

      const { id, ...updates } = todo;

      await fsService.updateTodo(uid, id, updates);
      dispatch(editTodo(todo));
    },
    [uid, dispatch, editTodo]
  );

  const removeTodo = useCallback(
    async (todoId: string) => {
      if (!uid) throw new Error('User not authenticated');

      await fsService.deleteTodo(uid, todoId);
      dispatch(deleteTodo(todoId));
    },
    [uid, dispatch, deleteTodo]
  );

  const syncProjects = useCallback(
    async (projects: ProjectDetails[]) => {
      if (!uid) throw new Error('User not authenticated');
      await fsService.addProjects(uid, projects);
    },
    [uid]
  );

  const syncTodos = useCallback(
    async (todos: TodoDetails[]) => {
      if (!uid) throw new Error('User not authenticated');
      await fsService.addTodos(uid, todos);
    },
    [uid]
  );

  return {
    createProject,
    modifyProject,
    removeProject,
    createTodo,
    modifyTodo,
    removeTodo,
    syncProjects,
    syncTodos
  };
};
