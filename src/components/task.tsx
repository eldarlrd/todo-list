import { PenSquare, Trash2, CheckCircle2, HelpCircle } from 'lucide-preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { AddTodo } from '@/components/modals/addTodo.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useVisible } from '@/hooks/useVisible.ts';

export const Task = (): JSX.Element => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const [isDone, setIsDone] = useState<boolean>();

  return (
    <>
      <div class='mt-3.5 flex flex-col gap-1.5 rounded bg-slate-100 px-4 py-3 drop-shadow-sm duration-150 dark:bg-slate-800 xl:text-lg'>
        <div class='flex items-center justify-between'>
          <p class='mr-4 -skew-x-6 break-all text-slate-600 dark:text-slate-400'>
            Project
          </p>
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
                    taskMode='Todo'
                    taskTitle='Default'
                  />
                );
              }}>
              <Trash2 aria-label='Trash' />
              <span class='hidden sm:inline xl:text-lg'>Delete</span>
            </button>
          </span>
        </div>

        <p class='-my-1 mr-16 break-all font-medium'>Title</p>
        <p class='mr-16 break-all'>Description</p>
        <p class='-mb-1 mr-16 mt-1'>18 Sep. 2023</p>
        <div class='flex items-center justify-between'>
          <p class='mr-10 flex items-center gap-1.5 break-all'>
            <span class='block aspect-square w-4 rounded-full bg-teal-500' />
            Low
          </p>
          <button
            type='button'
            title='Check Done'
            class='hover:(text-emerald-900, dark:text-sky-400) flex scale-110 items-center gap-1.5 rounded font-medium duration-150'
            onClick={(): void => {
              setIsDone(!isDone);
            }}>
            {isDone ? (
              <CheckCircle2 aria-label='Check Mark' class='' />
            ) : (
              <HelpCircle aria-label='Question Mark' class='' />
            )}
            <span class='hidden sm:inline xl:text-lg'>Check</span>
          </button>
        </div>
      </div>

      <ModalWindow
        modalContent={modalContent}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={ref}
      />
    </>
  );
};
