import { Plus } from 'lucide-preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { SortMenu } from '@/components/controls/sortMenu.tsx';
import { ViewMenu } from '@/components/controls/viewMenu.tsx';
import { AddTodo } from '@/components/modals/addTodo.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useStateSync } from '@/hooks/useStateSync.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { type TodoDetails } from '@/slices/todoSlice.ts';

export const ControlPanel = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [isLoading, setIsLoading] = useState(false);
  const { createTodo } = useStateSync();

  const handleAddNewTodo = async ({
    project,
    title,
    description,
    dueDate,
    priority,
    stage,
    isDone
  }: Omit<TodoDetails, 'id'>): Promise<void> => {
    try {
      setIsLoading(true);

      await createTodo({
        project,
        title,
        description,
        dueDate,
        priority,
        stage,
        isDone
      });

      setIsVisible(false);
    } catch (error: unknown) {
      if (error instanceof Error) console.error('Failed to add todo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div
        id='control-panel'
        class='md:(py-1.5, min-h-[3.25rem]) flex min-h-[2.5rem] items-center justify-between bg-slate-300 px-3 py-1 transition-all dark:bg-slate-600'>
        <button
          type='button'
          id='add-todo'
          class='hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) md:(max-w-[8.5rem], text-lg, gap-1, pl-3, pr-4, py-1.5) flex max-w-[7.25rem] items-center gap-0.5 rounded bg-violet-800 py-1 pr-3 pl-2 leading-4 font-medium break-all whitespace-nowrap text-white transition-all dark:bg-pink-600'
          onClick={(): void => {
            setIsVisible(true);
          }}>
          <Plus
            aria-label='Plus Sign'
            strokeWidth='2.25'
            size='22'
            class='md:scale-110'
          />
          Add Todo
        </button>

        <div class='flex gap-2'>
          <SortMenu />
          <ViewMenu />
        </div>
      </div>

      <ModalWindow
        modalContent={
          <AddTodo
            key='Add Todo'
            actionMode='Add'
            setIsVisible={setIsVisible}
            handleAction={handleAddNewTodo}
            isLoading={isLoading}
          />
        }
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </>
  );
};
