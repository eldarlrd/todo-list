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
          ? 'dark:(bg-slate-900, bg-opacity-70) absolute inset-0 flex items-center justify-center bg-slate-50 bg-opacity-70'
          : 'hidden'
      }>
      {window}
    </div>
  );
};
