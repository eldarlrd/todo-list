import { nanoid } from 'nanoid';
import { useCallback } from 'preact/hooks';

import { STAGE_OPTIONS } from '@/config/options.tsx';
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

  const withSync = useCallback(
    async <T>(
      localAction: () => T,
      remoteAction?: () => Promise<void>
    ): Promise<T> => {
      const result = localAction();

      if (uid && remoteAction) await remoteAction();

      return result;
    },
    [uid]
  );

  const syncProjects = useCallback(
    async (projects: ProjectDetails[]) => {
      await withSync(
        () => dispatch(setProjects(projects)),
        () => fsService.addProjects(uid!, projects)
      );
    },
    [dispatch, setProjects, uid, withSync]
  );

  const createProject = useCallback(
    async (project: Omit<ProjectDetails, 'id'>) => {
      const id = uid ? await fsService.addProject(uid, project) : nanoid();

      dispatch(addNewProject({ ...project, id }));

      return id;
    },
    [uid, dispatch, addNewProject]
  );

  const modifyProject = useCallback(
    async (project: ProjectDetails) => {
      await withSync(
        () => dispatch(editProject(project)),
        () => {
          const { id, ...updates } = project;

          return fsService.updateProject(uid!, id, updates);
        }
      );
    },
    [uid, dispatch, editProject, withSync]
  );

  const removeProject = useCallback(
    async (projectId: string) => {
      await withSync(
        () => {
          dispatch(deleteProject(projectId));
          dispatch(deleteProjectTodos(projectId));
        },
        () => fsService.deleteProject(uid!, projectId)
      );
    },
    [uid, dispatch, deleteProject, deleteProjectTodos, withSync]
  );

  const createTodo = useCallback(
    async (todo: Omit<TodoDetails, 'id'>) => {
      const id = uid ? await fsService.addTodo(uid, todo) : nanoid();

      dispatch(addNewTodo({ ...todo, id }));
    },
    [uid, dispatch, addNewTodo]
  );

  const toggleTodo = useCallback(
    async (todoId: string, isDone: boolean) => {
      await withSync(
        () => dispatch(checkTodo({ id: todoId, isDone })),
        () => fsService.checkTodo(uid!, todoId, isDone)
      );
    },
    [uid, dispatch, checkTodo, withSync]
  );

  const modifyTodo = useCallback(
    async (todo: TodoDetails) => {
      await withSync(
        () => dispatch(editTodo(todo)),
        () => {
          const { id, ...data } = todo;
          const updates = {
            ...data,
            isDone: todo.stage === STAGE_OPTIONS[2]
          };

          return fsService.updateTodo(uid!, id, updates);
        }
      );
    },
    [uid, dispatch, editTodo, withSync]
  );

  const removeTodo = useCallback(
    async (todoId: string) => {
      await withSync(
        () => dispatch(deleteTodo(todoId)),
        () => fsService.deleteTodo(uid!, todoId)
      );
    },
    [uid, dispatch, deleteTodo, withSync]
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
