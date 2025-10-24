import { type User } from 'firebase/auth';

import { addProjects, addTodos, fetchAllData } from '@/lib/firestore.ts';
import { type ProjectDetails } from '@/slices/projectSlice.ts';
import { type TodoDetails } from '@/slices/todoSlice.ts';

interface MergerProps {
  uid: User['uid'];
  localProjects: ProjectDetails[];
  localTodos: TodoDetails[];
}

export const taskMerger = async ({
  uid,
  localProjects,
  localTodos
}: MergerProps): Promise<(ProjectDetails[] | TodoDetails[] | [null])[]> => {
  try {
    const { projects: remoteProjects, todos: remoteTodos } =
      await fetchAllData(uid);

    const remoteProjectMap = new Map(remoteProjects.map(p => [p.id, p]));
    const remoteTodoMap = new Map(remoteTodos.map(t => [t.id, t]));

    const mergedProjects = [...remoteProjects];

    localProjects.forEach(localProject => {
      if (!remoteProjectMap.has(localProject.id))
        mergedProjects.push(localProject);
    });

    const reorderedProjects = mergedProjects.map((project, index) => ({
      ...project,
      order: index
    }));

    const mergedTodos = [...remoteTodos];

    localTodos.forEach(localTodo => {
      if (!remoteTodoMap.has(localTodo.id)) mergedTodos.push(localTodo);
    });

    const localOnlyProjects = localProjects.filter(
      p => !remoteProjectMap.has(p.id)
    );
    const localOnlyTodos = localTodos.filter(t => !remoteTodoMap.has(t.id));

    if (localOnlyProjects.length > 0 || localOnlyTodos.length > 0) {
      await Promise.all([
        localOnlyProjects.length > 0 ?
          addProjects(uid, localOnlyProjects)
        : Promise.resolve(),
        localOnlyTodos.length > 0 ?
          addTodos(uid, localOnlyTodos)
        : Promise.resolve()
      ]);
    }

    return [reorderedProjects, mergedTodos];
  } catch (error: unknown) {
    if (error instanceof Error) throw error;

    return [];
  }
};
