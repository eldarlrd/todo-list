import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

export const DeleteModal = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  return (
    <div>
      Delete?
      <button
        type='button'
        id='delete-cancel'
        onClick={(): void => {
          setIsVisible(false);
        }}>
        Cancel
      </button>
      <button
        type='button'
        id='delete-item'
        onClick={(): void => {
          setIsVisible(false);
        }}
        class='hover:(bg-rose-700, border-rose-700, text-slate-50, active:(bg-rose-800, border-rose-800)) border-1 md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md border-current py-1.5 text-lg font-medium text-rose-700 transition-all dark:text-slate-50 lg:w-28'>
        Delete
      </button>
    </div>
  );
};
