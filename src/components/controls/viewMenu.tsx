import { Eye } from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { todoActions } from '@/slices/todoSlice.ts';

const VIEW_OPTIONS: string[] = ['All', 'Todo', 'In Progress', 'Done'];

const ViewMenu = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);

  const dispatch = useAppDispatch();
  const { setViewMode } = todoActions;
  const { viewMode } = useAppSelector(state => state.todoReducer);

  const switchView = (view: string): void => {
    setIsVisible(false);
    dispatch(setViewMode(view));
  };

  return (
    <div ref={refer}>
      <button
        type='button'
        title='Switch View'
        id='view-menu'
        class={`${
          isVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) md:(max-w-[8rem], text-base, gap-1.5, px-2, py-2) flex max-w-[7rem] items-center justify-end gap-1 whitespace-nowrap rounded py-1.5 pl-1.5 pr-2 text-sm font-medium duration-150`}
        onClick={(): void => {
          setIsVisible(!isVisible);
        }}>
        {viewMode ?
          <>
            <Eye aria-label='Eye' size='20' />
            {viewMode}
          </>
        : null}
      </button>

      {isVisible && (
        <div
          id='view-dropdown'
          class='dark:(bg-slate-700, shadow-slate-600) absolute right-3 z-10 mt-1.5 flex flex-col items-end justify-center overflow-clip rounded bg-slate-200 shadow-sm shadow-slate-300 md:mt-2'>
          {VIEW_OPTIONS.map(option => (
            <button
              type='button'
              key={option}
              class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-28 min-w-fit select-none justify-end px-2 py-[3px] font-medium active:bg-slate-400 md:w-32'
              onClick={(e: Event): void => {
                switchView((e.target as HTMLButtonElement).innerText);
              }}>
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export { VIEW_OPTIONS, ViewMenu };
