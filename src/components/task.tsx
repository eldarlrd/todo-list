import { PenSquare, Trash2, CheckCircle2, HelpCircle } from 'lucide-preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { AddTodo } from '@/components/modals/addTodo.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useVisible } from '@/hooks/useVisible.ts';

export const Task = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const [isDone, setIsDone] = useState<boolean>();

  return (
    <>
      <div class='mt-3.5 flex justify-between gap-6 rounded bg-slate-100 px-4 py-3 drop-shadow-sm duration-150 dark:bg-slate-800 xl:text-lg'>
        <div class='flex flex-col gap-1.5 break-all'>
          <p class='-skew-x-6 text-slate-600 dark:text-slate-400'>Project</p>
          <p
            class={`${
              isDone ? 'line-through' : ''
            } -my-1 font-medium decoration-2`}>
            Title
          </p>
          <p>Description</p>
          <p class='-mb-1 mt-1'>11 Oct. 2023</p>
          <p class='flex items-center gap-1.5'>
            <span class='block aspect-square w-4 rounded-full bg-teal-500' />
            Low
          </p>
        </div>

        <div class='flex flex-col items-end justify-between'>
          <span class='flex gap-3'>
            <button
              type='button'
              title='Edit Todo'
              class='hover:(text-violet-900, dark:text-pink-400) flex scale-105 items-center gap-1.5 rounded font-medium duration-150'
              onClick={(): void => {
                setIsVisible(true);
                setModalContent(
                  <AddTodo key='Edit Todo' setIsVisible={setIsVisible} />
                );
              }}>
              <PenSquare aria-label='Pen' />
              <span class='hidden sm:inline xl:text-lg'>Edit</span>
            </button>

            <button
              type='button'
              title='Delete Todo'
              class='hover:(text-rose-900, dark:text-rose-400) flex scale-105 items-center gap-1.5 rounded font-medium duration-150'
              onClick={(): void => {
                setIsVisible(true);
                setModalContent(
                  <DeleteModal
                    key='Delete Todo'
                    setIsVisible={setIsVisible}
                    taskTitle='Default'
                    taskMode='Todo'
                    handleDelete={(): void => {
                      console.log('Delete');
                    }}
                  />
                );
              }}>
              <Trash2 aria-label='Trash' />
              <span class='hidden sm:inline xl:text-lg'>Delete</span>
            </button>
          </span>

          <button
            type='button'
            title='Check Done'
            class='hover:(text-emerald-900, dark:text-sky-400) flex scale-110 items-center gap-1.5 rounded font-medium duration-150'
            onClick={(): void => {
              setIsDone(!isDone);
            }}>
            {isDone ? (
              <CheckCircle2 aria-label='Check Mark' />
            ) : (
              <HelpCircle aria-label='Question Mark' />
            )}
            <span class='hidden sm:inline xl:text-lg'>
              {isDone ? 'Done' : 'Working'}
            </span>
          </button>
        </div>
      </div>

      <ModalWindow
        modalContent={modalContent}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </>
  );
};
