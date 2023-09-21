import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

export const DeleteModal = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  return (
    <div class='flex flex-col'>
      Delete?
      <div class='flex justify-between pt-1.5'>
        <button
          type='button'
          id='delete-cancel'
          class='hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md py-1.5 text-lg font-medium text-slate-900 transition-all dark:text-slate-50 lg:w-28'
          onClick={(): void => {
            setIsVisible(false);
          }}>
          Cancel
        </button>
        <button
          type='button'
          id='delete-item'
          class='hover:(bg-rose-700, active:bg-rose-600, dark:(bg-rose-700, active:bg-rose-800)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md dark:bg-rose-600 bg-rose-800 py-1.5 text-lg font-medium text-white transition-all lg:w-28'
          onClick={(): void => {
            setIsVisible(false);
          }}>
          Delete
        </button>
      </div>
    </div>
  );
};
