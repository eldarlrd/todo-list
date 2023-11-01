import {
  ChevronDown,
  ArrowDown01,
  ArrowUp10,
  ArrowDownAZ,
  ArrowUpZA,
  ArrowDownNarrowWide,
  ArrowUpWideNarrow
} from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { todoActions } from '@/slices/todoSlice.ts';

const SORT_OPTIONS: {
  Title: JSX.Element[];
  Priority: JSX.Element[];
  'Due Date': JSX.Element[];
} = {
  Title: [
    <ArrowDownAZ
      key='Title Descending'
      aria-label='Sort by Title Descending'
      size='22'
      class='md:scale-110'
    />,
    <ArrowUpZA
      key='Title Ascending'
      aria-label='Sort by Title Ascending'
      size='22'
      class='md:scale-110'
    />
  ],
  Priority: [
    <ArrowDown01
      key='Priority Descending'
      aria-label='Sort by Priority Descending'
      size='22'
      class='md:scale-110'
    />,
    <ArrowUp10
      key='Priority Ascending'
      aria-label='Sort by Priority Ascending'
      size='22'
      class='md:scale-110'
    />
  ],
  'Due Date': [
    <ArrowDownNarrowWide
      key='Due Date Descending'
      aria-label='Sort by Due Date Descending'
      size='22'
      class='md:scale-110'
    />,
    <ArrowUpWideNarrow
      key='Due Date Ascending'
      aria-label='Sort by Priority Ascending'
      size='22'
      class='md:scale-110'
    />
  ]
};

const SortMenu = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);

  const dispatch = useAppDispatch();
  const { setSortMode, setSortAscending } = todoActions;
  const { sortMode, sortAscending } = useAppSelector(
    state => state.todoReducer
  );

  const switchSort = (sort: string): void => {
    setIsVisible(false);
    dispatch(setSortMode(sort));
  };

  const switchSortOrder = (ascending: number): void => {
    dispatch(setSortAscending(ascending));
  };

  return (
    <div class='flex' ref={refer}>
      {sortMode ? (
        <button
          type='button'
          title='Toggle Order'
          id='toggle-order'
          class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, pl-3.5, pr-3, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-l py-1 pl-2.5 pr-2 text-sm font-medium duration-150'
          onClick={(): void => {
            switchSortOrder(sortAscending === 0 ? 1 : 0);
          }}>
          {SORT_OPTIONS[sortMode as keyof typeof SORT_OPTIONS][sortAscending]}
        </button>
      ) : null}

      <button
        type='button'
        title='Switch Sort'
        id='sort-menu'
        class={`${
          isVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2.5, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-r px-1.5 py-1 text-sm font-medium duration-150`}
        onClick={(): void => {
          setIsVisible(!isVisible);
        }}>
        {sortMode ? (
          <ChevronDown
            aria-label='Chevron Down'
            size='22'
            class='md:scale-110'
          />
        ) : null}
      </button>

      {isVisible && (
        <div
          id='sort-dropdown'
          class='dark:(bg-slate-700, shadow-slate-600) absolute z-10 -ml-[1.4rem] mt-[2.35rem] flex flex-col items-end justify-center overflow-clip rounded bg-slate-200 shadow-sm shadow-slate-300 md:mt-12'>
          {Object.keys(SORT_OPTIONS).map(option => (
            <button
              type='button'
              key={option}
              class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-24 min-w-fit select-none justify-end px-2 py-[3px] font-medium active:bg-slate-400 md:w-28'
              onClick={(e: Event): void => {
                switchSort((e.target as HTMLButtonElement).innerText);
              }}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { SORT_OPTIONS, SortMenu };
