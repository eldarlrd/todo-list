import { type JSX } from 'preact/jsx-runtime';
import { type StateUpdater, useEffect } from 'preact/hooks';
import { useComponentVisible } from '@/hooks/useComponentVisible.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

interface ViewControls {
  view: string | undefined;
  setView: StateUpdater<string | undefined>;
}

export const ViewMenu = ({ view, setView }: ViewControls): JSX.Element => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const switchView = (selected: string): void => {
    setView(selected);
    setIsComponentVisible(false);
    sessionStorage.setItem('view', selected);
  };

  useEffect(() => {
    sessionStorage.view
      ? setView(sessionStorage.view as string)
      : setView('All');
  }, [setView]);

  return (
    <div ref={ref}>
      <button
        id='viewMenu'
        onClick={(): void => {
          setIsComponentVisible(!isComponentVisible);
        }}
        title='Switch View'
        class={`${
          isComponentVisible ? 'bg-slate-200 dark:bg-slate-700' : ''
        } hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) flex items-center justify-end gap-2 rounded-md px-2 font-medium transition-colors`}>
        {view ? (
          <>
            <FontAwesomeIcon icon={faEye} />
            {view}
          </>
        ) : null}
      </button>
      {isComponentVisible && (
        <div
          id='viewDropdown'
          class={
            'absolute right-6 mt-2 flex flex-col items-end justify-center rounded-md bg-slate-200 dark:bg-slate-700'
          }>
          <button
            onClick={(e: Event): void => {
              switchView((e.target as HTMLButtonElement).innerText);
            }}
            class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-32 min-w-fit justify-end rounded-t-md px-2 py-0.5 font-medium active:bg-slate-400'>
            All
          </button>
          <button
            onClick={(e: Event): void => {
              switchView((e.target as HTMLButtonElement).innerText);
            }}
            class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-32 min-w-fit justify-end px-2 py-0.5 font-medium active:bg-slate-400'>
            Todo
          </button>
          <button
            onClick={(e: Event): void => {
              switchView((e.target as HTMLButtonElement).innerText);
            }}
            class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-32 min-w-fit justify-end px-2 py-0.5 font-medium active:bg-slate-400'>
            In Progress
          </button>
          <button
            onClick={(e: Event): void => {
              switchView((e.target as HTMLButtonElement).innerText);
            }}
            class='hover:(bg-slate-300 dark:(bg-slate-600 active:bg-slate-500)) flex w-32 min-w-fit justify-end rounded-b-md px-2 py-0.5 font-medium active:bg-slate-400'>
            Done
          </button>
        </div>
      )}
    </div>
  );
};
