import { ArrowDown01 } from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

export const SortMenu = (): JSX.Element => {
  return (
    <button
      id='sortMenu'
      type='button'
      title='Toggle Order'
      class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-md py-1 pl-1.5 pr-2 text-sm font-medium'>
      <ArrowDown01 />
    </button>
  );
};
