import { type JSX } from 'preact/jsx-runtime';

interface ConfirmControls {
  id: string;
  action: string;
  styleClass: string;
  isDisabled: boolean;
  handleConfirm: () => void;
}

export const ConfirmButton = ({
  id,
  action,
  styleClass,
  isDisabled,
  handleConfirm
}: ConfirmControls): JSX.Element => {
  return (
    <button
      type='button'
      id={id}
      class={`${styleClass} ${
        isDisabled ? 'cursor-not-allowed !bg-slate-500' : ''
      } md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded py-1.5 text-lg font-medium text-white transition-all lg:w-28`}
      disabled={isDisabled}
      onClick={handleConfirm}>
      {action}
    </button>
  );
};
