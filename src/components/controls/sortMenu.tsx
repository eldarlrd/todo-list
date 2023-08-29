import { type JSX } from 'preact/jsx-runtime';
import { ChevronDown, ArrowDown01 } from 'lucide-preact';

export const SortMenu = (): JSX.Element => {
  return (
    <span class='flex'>
      <button
        id='toggle-order'
        type='button'
        title='Toggle Order'
        class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, pl-2.5, pr-2, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-l-md py-1 pl-1.5 pr-1 text-sm font-medium duration-150'>
        <ArrowDown01
          aria-label='Sort by X Descending'
          size='22'
          class='md:scale-110'
        />
      </button>
      <button
        id='sort-menu'
        type='button'
        title='Switch Sort'
        class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-1.5, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-r-md px-0.5 py-1 text-sm font-medium duration-150'>
        <ChevronDown aria-label='Chevron Down' size='22' class='md:scale-110' />
      </button>
    </span>
  );
};
