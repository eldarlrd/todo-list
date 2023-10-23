import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CancelButton } from '@/components/buttons/cancelButton.tsx';
import { ConfirmButton } from '@/components/buttons/confirmButton.tsx';

interface DeleteControls {
  setIsVisible: StateUpdater<boolean>;
  taskTitle: string;
  taskMode: string;
  handleDelete: () => void;
}

export const DeleteModal = ({
  setIsVisible,
  taskTitle,
  taskMode,
  handleDelete
}: DeleteControls): JSX.Element => {
  return (
    <div class='flex select-none flex-col gap-1.5 break-words text-center xl:text-lg'>
      <p>Are you sure?</p>
      <p>
        {taskMode} <span class='font-semibold'>{taskTitle}</span> will be
        deleted permanently.
      </p>
      <div class='mt-4 flex justify-end gap-2'>
        <CancelButton
          id='delete-cancel'
          handleCancel={(): void => {
            setIsVisible(false);
          }}
        />
        <ConfirmButton
          id='delete-item'
          action='Delete'
          styleClass='hover:(bg-rose-700, active:bg-rose-600, dark:(bg-rose-700, active:bg-rose-800)) bg-rose-800 dark:bg-rose-600'
          handleConfirm={(): void => {
            handleDelete();
            setIsVisible(false);
          }}
        />
      </div>
    </div>
  );
};
