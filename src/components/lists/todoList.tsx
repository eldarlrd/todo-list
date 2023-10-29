import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';

export const TodoList = (): JSX.Element => {
  return (
    <section
      id='list'
      class='flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <ControlPanel />
      <div tabIndex={-1} class='overflow-y-auto px-3 pb-3.5'>
        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          Todo
        </p>

        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          In Progress
        </p>

        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          Done
        </p>
      </div>
    </section>
  );
};
