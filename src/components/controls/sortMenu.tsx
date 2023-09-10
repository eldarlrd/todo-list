import {
  ChevronDown,
  ArrowDown01,
  ArrowUp10,
  ArrowDownAZ,
  ArrowUpZA,
  ArrowDownNarrowWide,
  ArrowUpWideNarrow
} from 'lucide-preact';
import { useState, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { useVisible } from '@/hooks/useVisible.ts';

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

export const SortMenu = (): JSX.Element => {
  const { ref, isVisible, setIsVisible } = useVisible(false);
  const [isSortAscending, setIsSortAscending] = useState<boolean>();
  const [sortSelected, setSortSelected] = useState<string>();

  const switchSortOrder = (sortOrder: boolean): void => {
    setIsSortAscending(sortOrder);
    sessionStorage.setItem('sortOrder', sortOrder.toString());
  };

  const switchSort = (sort: string): void => {
    setSortSelected(sort);
    setIsVisible(false);
    sessionStorage.setItem('sort', sort);
  };

  useEffect(() => {
    sessionStorage.sortOrder
      ? setIsSortAscending(
          JSON.parse(sessionStorage.sortOrder as string) as boolean
        )
      : setIsSortAscending(false);
  }, [setIsSortAscending]);

  useEffect(() => {
    sessionStorage.sort
      ? setSortSelected(sessionStorage.sort as string)
      : setSortSelected('Title');
  }, [setSortSelected]);

  return (
    <div class='flex' ref={ref}>
      {sortSelected ? (
        <button
          id='toggle-order'
          type='button'
          onClick={(): void => {
            switchSortOrder(!isSortAscending);
          }}
          title='Toggle Order'
          class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, pl-3.5, pr-3, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-l-md py-1 pl-2.5 pr-2 text-sm font-medium duration-150'>
          {
            SORT_OPTIONS[sortSelected as keyof typeof SORT_OPTIONS][
              isSortAscending ? 1 : 0
            ]
          }
        </button>
      ) : null}

      <button
        id='sort-menu'
        type='button'
        onClick={(): void => {
          setIsVisible(!isVisible);
        }}
        title='Switch Sort'
        class={`${
          isVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2.5, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded-r-md px-1.5 py-1 text-sm font-medium duration-150`}>
        {sortSelected ? (
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
          class='absolute -ml-[1.4rem] mt-[2.35rem] flex flex-col items-end justify-center overflow-clip rounded-md bg-slate-200 dark:bg-slate-700 md:mt-12'>
          {Object.keys(SORT_OPTIONS).map(option => (
            <button
              key={option}
              type='button'
              onClick={(e: Event): void => {
                switchSort((e.target as HTMLButtonElement).innerText);
              }}
              class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-24 min-w-fit justify-end px-2 py-0.5 font-medium active:bg-slate-400 md:w-28'>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};