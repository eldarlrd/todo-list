import { type JSX } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';
import { ViewMenu } from '@/components/controls/viewMenu.tsx';

export const List = (): JSX.Element => {
  const [view, setView] = useState<string>();
  return (
    <section
      id='list'
      class='flex grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <div
        id='viewMenuBar'
        class='dark:(bg-slate-600, text-slate-50) flex min-h-[2rem] justify-end bg-slate-300 px-6 py-1 text-slate-900 transition-colors'>
        <ViewMenu view={view} setView={setView} />
      </div>
    </section>
  );
};
