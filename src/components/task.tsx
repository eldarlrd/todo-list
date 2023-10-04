import {
  PenSquare,
  Trash2,
  HelpCircle
  /* CheckCircle2 */
} from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

export const Task = (): JSX.Element => {
  return (
    <div class='mt-3.5 flex flex-col gap-1 rounded bg-slate-100 px-4 py-3 drop-shadow-sm duration-150 dark:bg-slate-800'>
      <div class='flex items-center justify-between'>
        <p>Project</p>
        <span class='flex gap-1.5'>
          <button>
            <PenSquare />
          </button>
          <button>
            <Trash2 />
          </button>
        </span>
      </div>
      <p>Title</p>
      <p>Description</p>
      <p>18 Sep. 2023</p>
      <div class='flex items-center justify-between'>
        <p class='flex items-center gap-1.5'>
          <span class='block aspect-square w-4 rounded-full bg-teal-500' />
          Low
        </p>
        <button>
          <HelpCircle />
        </button>
      </div>
    </div>
  );
};
