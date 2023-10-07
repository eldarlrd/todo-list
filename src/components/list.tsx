import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { Task } from '@/components/task.tsx';

export const List = (): JSX.Element => {
  return (
    <section
      id='list'
      class='flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <ControlPanel />
      <div class='overflow-x-hidden overflow-y-scroll px-3 pb-3.5'>
        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          Todo
        </p>
        <Task />
        <Task />

        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          In Progress
        </p>
        <Task />
        <Task />

        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          Done
        </p>
        <Task />
        <Task />
      </div>
    </section>
  );
};
