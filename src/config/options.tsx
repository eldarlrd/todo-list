import {
  ArrowDown01,
  ArrowDownAZ,
  ArrowDownNarrowWide,
  ArrowUp10,
  ArrowUpWideNarrow,
  ArrowUpZA
} from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

const TOAST_LIMIT = 2;
const MAX_CHARACTER_LENGTH = 140; // X Character Limit
const STAGE_OPTIONS = ['Todo', 'In Progress', 'Done'] as const;
const VIEW_OPTIONS = ['All', 'Todo', 'In Progress', 'Done'] as const;

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

export {
  TOAST_LIMIT,
  MAX_CHARACTER_LENGTH,
  STAGE_OPTIONS,
  VIEW_OPTIONS,
  SORT_OPTIONS
};
