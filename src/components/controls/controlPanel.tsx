import { Plus } from 'lucide-preact';
import { nanoid } from 'nanoid';
import { type JSX } from 'preact/jsx-runtime';

import { SortMenu } from '@/components/controls/sortMenu.tsx';
import { ViewMenu } from '@/components/controls/viewMenu.tsx';
import { AddTodo } from '@/components/modals/addTodo.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { type TodoDetails } from '@/components/tasks/todo.tsx';
import { useAppDispatch } from '@/hooks/useAppState.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { todoActions } from '@/slices/todoSlice.ts';

export const ControlPanel = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);

  const dispatch = useAppDispatch();
  const { addNewTodo } = todoActions;

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
            handleAction={({
              project,
              title,
              description,
              dueDate,
              priority,
              stage,
              isDone
            }: TodoDetails): void => {
              const id = nanoid();

              dispatch(
                addNewTodo({
                  id,
                  project,
                  title,
                  description,
                  dueDate,
                  priority,
                  stage,
                  isDone
                })
              );
            }}
          />
        }
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </>
  );
};
