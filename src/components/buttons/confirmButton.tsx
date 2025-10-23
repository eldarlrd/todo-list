import { LoaderCircle } from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

interface ConfirmControls {
  id: string;
  action: string;
  styleClass: string;
  isDisabled?: boolean;
  isLoading?: boolean;
  handleConfirm: () => void | Promise<void>;
}

export const ConfirmButton = ({
  id,
  action,
  styleClass,
  isDisabled = false,
  isLoading = false,
  handleConfirm
}: ConfirmControls): JSX.Element => (
  <button
    type='button'
    id={id}
    class={`${styleClass} ${
      isDisabled || isLoading ? 'cursor-not-allowed !bg-slate-500' : ''
    } md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded py-1.5 text-lg font-medium text-white transition-all lg:w-28`}
    disabled={isDisabled || isLoading}
    onClick={() => void handleConfirm()}>
    {isLoading ?
      <LoaderCircle
        aria-label='Loader Circle'
        strokeWidth='2.25'
        class='inline-block scale-110 animate-spin'
      />
    : action}
  </button>
);
