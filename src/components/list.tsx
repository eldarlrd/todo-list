import { type JSX } from 'preact/jsx-runtime';
import { ControlBar } from '@/components/controls/controlBar.tsx';

export const List = (): JSX.Element => {
  return (
    <section
      id='list'
      class='flex grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <ControlBar />
    </section>
  );
};
