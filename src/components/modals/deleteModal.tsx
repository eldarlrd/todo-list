import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

export const DeleteModal = ({
  setIsVisible,
  taskMode,
  taskTitle
}: {
  setIsVisible: StateUpdater<boolean>;
  taskMode: string;
  taskTitle: string;
}): JSX.Element => {
  return (
    <div class='flex flex-col gap-1.5 break-words xl:text-lg'>
      <p>Are you sure?</p>
      <p>
        {taskMode} <strong>{taskTitle}</strong> will be deleted permanently.
      </p>
      <div class='flex justify-end gap-2 pt-1.5'>
        <button
          type='button'
          id='delete-cancel'
          class='hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md py-1.5 text-lg font-medium transition-all lg:w-28'
          onClick={(): void => {
            setIsVisible(false);
          }}>
          Cancel
        </button>
        <button
          type='button'
          id='delete-item'
          class='hover:(bg-rose-700, active:bg-rose-600, dark:(bg-rose-700, active:bg-rose-800)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md bg-rose-800 py-1.5 text-lg font-medium text-white transition-all dark:bg-rose-600 lg:w-28'>
          Delete
        </button>
      </div>
    </div>
  );
};
