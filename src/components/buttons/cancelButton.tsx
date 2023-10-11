import { type JSX } from 'preact/jsx-runtime';

export const CancelButton = ({
  id,
  handleCancel
}: {
  id: string;
  handleCancel: () => void;
}): JSX.Element => {
  return (
    <button
      type='button'
      id={id}
      class='hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded py-1.5 text-lg font-medium transition-all lg:w-28'
      onClick={handleCancel}>
      Cancel
    </button>
  );
};
