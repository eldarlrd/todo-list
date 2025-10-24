import { RefreshCw } from 'lucide-preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import { taskMerger } from '@/lib/taskMerger.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';

export const Sync = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAppSelector(state => state.authReducer);

  const { projectList: localProjects } = useAppSelector(
    state => state.projectReducer
  );
  const { todoList: localTodos } = useAppSelector(state => state.todoReducer);
  const dispatch = useAppDispatch();

  const { setProjects, setSelectedProject } = projectActions;
  const { setTodos } = todoActions;

  const handleSync = async (): Promise<void> => {
    if (user) {
      try {
        setIsLoading(true);
        const [mergedProjects, mergedTodos] = await taskMerger({
          uid: user.uid,
          localProjects,
          localTodos
        });

        if (!localProjects.length)
          dispatch(setSelectedProject(mergedProjects[0]?.id));
        dispatch(setProjects(mergedProjects));
        dispatch(setTodos(mergedTodos));
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <button
      type='button'
      title='Sync'
      id='user-sync'
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={handleSync}
      disabled={isLoading}
      class={`${isLoading ? 'cursor-not-allowed' : ''} hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) lg:(w-14, px-4) xl:(w-16, px-5, py-2.5) max-h-[3rem] w-12 rounded px-3 py-1.5 leading-4 transition-colors md:py-2`}>
      <RefreshCw
        aria-label='Refresh'
        strokeWidth='2'
        class={`transform transition md:scale-110 ${isLoading ? 'animate-spin' : ''}`}
      />
    </button>
  );
};
