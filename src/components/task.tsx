import {
  PenSquare,
  Trash2,
  HelpCircle
  /* CheckCircle2 */
} from 'lucide-preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useVisible } from '@/hooks/useVisible.ts';

export const Task = (): JSX.Element => {
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <>
      <div class='mt-3.5 flex flex-col gap-1 rounded bg-slate-100 px-4 py-3 drop-shadow-sm duration-150 dark:bg-slate-800'>
        <div class='flex items-center justify-between'>
          <p class='-skew-x-6'>Project</p>
          <span class='flex gap-1.5'>
            <button>
              <PenSquare />
            </button>
            <button
              type='button'
              title='Delete Todo'
              class='hover:(text-rose-900, dark:text-rose-400) duration-150'
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
            </button>
          </span>
        </div>

        <p>Title</p>
        <p>Description</p>
        <p>18 Sep. 2023</p>
        <div class='flex items-center justify-between'>
          <p class='flex items-center gap-1.5'>
            <span class='block aspect-square w-4 rounded-full bg-teal-500' />
            Low
          </p>
          <button>
            <HelpCircle />
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
