import { type JSX } from 'preact/jsx-runtime';

export const Modal = ({
  window,
  visible
}: {
  window: JSX.Element | undefined;
  visible: boolean;
}): JSX.Element => {
  return (
    <div
      id='overlay'
      class={
        visible
          ? 'absolute inset-0 flex items-center justify-center bg-slate-50 bg-opacity-60 dark:bg-slate-900'
          : 'hidden'
      }>
      {window}
    </div>
  );
};
