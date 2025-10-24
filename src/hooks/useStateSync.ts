import { nanoid } from 'nanoid';
import { useCallback } from 'preact/hooks';

import { STAGE_OPTIONS } from '@/config/globals.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import * as fsService from '@/lib/firestore.ts';
import { type ProjectDetails, projectActions } from '@/slices/projectSlice.ts';
import { type TodoDetails, todoActions } from '@/slices/todoSlice.ts';

interface SyncTools {
  createProject: (project: Omit<ProjectDetails, 'id'>) => Promise<string>;
  modifyProject: (project: ProjectDetails) => Promise<void>;
  removeProject: (projectId: string) => Promise<void>;
  createTodo: (todo: Omit<TodoDetails, 'id'>) => Promise<void>;
  toggleTodo: (todoId: string, isDone: boolean) => Promise<void>;
  modifyTodo: (todo: TodoDetails) => Promise<void>;
  removeTodo: (todoId: string) => Promise<void>;
  syncProjects: (projects: ProjectDetails[]) => Promise<void>;
}

export const useStateSync = (): SyncTools => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.authReducer);
  const { setProjects, addNewProject, editProject, deleteProject } =
    projectActions;
  const { addNewTodo, editTodo, checkTodo, deleteTodo, deleteProjectTodos } =
    todoActions;

  const uid = user?.uid;

  const syncProjects = useCallback(
    async (projects: ProjectDetails[]) => {
      if (!uid) {
        dispatch(setProjects(projects));

        return;
      }

      dispatch(setProjects(projects));
      await fsService.addProjects(uid, projects);
    },
    [dispatch, setProjects, uid]
  );

  const createProject = useCallback(
    async (project: Omit<ProjectDetails, 'id'>) => {
      if (!uid) {
        const id = nanoid();

        dispatch(addNewProject({ ...project, id }));

        return id;
      }

      const id = await fsService.addProject(uid, project);

      dispatch(addNewProject({ ...project, id }));

      return id;
    },
    [uid, dispatch, addNewProject]
  );

  const modifyProject = useCallback(
    async (project: ProjectDetails) => {
      if (!uid) {
        dispatch(editProject(project));

        return;
      }

      const { id, ...updates } = project;

      dispatch(editProject(project));
      await fsService.updateProject(uid, id, updates);
    },
    [uid, dispatch, editProject]
  );

  const removeProject = useCallback(
    async (projectId: string) => {
      if (!uid) {
        dispatch(deleteProject(projectId));
        dispatch(deleteProjectTodos(projectId));

        return;
      }

      dispatch(deleteProject(projectId));
      dispatch(deleteProjectTodos(projectId));
      await fsService.deleteProject(uid, projectId);
    },
    [uid, dispatch, deleteProject, deleteProjectTodos]
  );

  const createTodo = useCallback(
    async (todo: Omit<TodoDetails, 'id'>) => {
      if (!uid) {
        const id = nanoid();

        dispatch(addNewTodo({ ...todo, id }));

        return;
      }

      const id = await fsService.addTodo(uid, todo);

      dispatch(addNewTodo({ ...todo, id }));
    },
    [uid, dispatch, addNewTodo]
  );

  const toggleTodo = useCallback(
    async (todoId: string, isDone: boolean) => {
      if (!uid) {
        dispatch(checkTodo({ id: todoId, isDone }));

        return;
      }

      dispatch(checkTodo({ id: todoId, isDone }));
      await fsService.checkTodo(uid, todoId, isDone);
    },
    [uid, dispatch, checkTodo]
  );

  const modifyTodo = useCallback(
    async (todo: TodoDetails) => {
      if (!uid) {
        dispatch(editTodo(todo));

        return;
      }

      const { id, ...data } = todo;
      const updates = {
        ...data,
        isDone: todo.stage === STAGE_OPTIONS[2]
      };

      dispatch(editTodo(todo));
      await fsService.updateTodo(uid, id, updates);
    },
    [uid, dispatch, editTodo]
  );

  const removeTodo = useCallback(
    async (todoId: string) => {
      if (!uid) {
        dispatch(deleteTodo(todoId));

        return;
      }

      dispatch(deleteTodo(todoId));
      await fsService.deleteTodo(uid, todoId);
    },
    [uid, dispatch, deleteTodo]
  );

  return {
    syncProjects,
    createProject,
    modifyProject,
    removeProject,
    createTodo,
    toggleTodo,
    modifyTodo,
    removeTodo
  };
};
