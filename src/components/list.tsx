import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { Task } from '@/components/task.tsx';

export const List = (): JSX.Element => {
  return (
    <section
      id='list'
      class='flex grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <ControlPanel />
      <Task />
    </section>
  );
};
