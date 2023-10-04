import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { Task } from '@/components/task.tsx';

export const List = (): JSX.Element => {
  return (
    <section
      id='list'
      class='flex grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <ControlPanel />
      <div class='mx-3 mt-3.5'>
        <p class='mx-2 -skew-x-6 select-none text-xl font-bold'>Todo</p>
        <Task />
        <Task />
      </div>
    </section>
  );
};
