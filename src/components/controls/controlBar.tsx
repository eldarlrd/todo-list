import { type JSX } from 'preact/jsx-runtime';
import { useState } from 'preact/hooks';
import { SortMenu } from '@/components/controls/sortMenu.tsx';
import { ViewMenu } from '@/components/controls/viewMenu.tsx';
import { Plus } from 'lucide-preact';

export const ControlBar = (): JSX.Element => {
  const [view, setView] = useState<string>();
  return (
    <div
      id='controlBar'
      class='dark:(bg-slate-600, text-slate-50) flex min-h-[2rem] items-center justify-between bg-slate-300 px-3 py-1 text-slate-900 transition-all md:py-1.5'>
      <button
        id='addTodo'
        type='button'
        class='hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) md:(max-w-[8.5rem], text-lg, gap-1, pl-3, pr-4, py-1.5) flex max-w-[7.25rem] items-center gap-0.5 whitespace-nowrap break-all rounded-lg bg-violet-800 py-1 pl-2 pr-3 font-medium leading-4 text-white transition-all dark:bg-pink-600'>
        <Plus
          aria-label='Plus Sign'
          strokeWidth='2.25'
          size='22'
          class='md:scale-110'
        />
        Add Todo
      </button>
      <div class='flex gap-1'>
        <SortMenu />
        <ViewMenu view={view} setView={setView} />
      </div>
    </div>
  );
};
