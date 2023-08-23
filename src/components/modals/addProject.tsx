import { type JSX } from 'preact/jsx-runtime';

export const AddProject = (): JSX.Element => {
  return (
    <div class='dark:(bg-slate-700, text-slate-50) mx-px mb-px grow select-text rounded-b-lg bg-slate-200 px-4 py-2 text-slate-900'>
      Project Name
    </div>
  );
};
