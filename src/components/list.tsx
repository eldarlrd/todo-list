import { type JSX } from 'preact/jsx-runtime';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const List = (): JSX.Element => {
  return (
    <section
      id='list'
      class='flex grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
      <div
        id='viewControlBar'
        class='dark:(bg-slate-600, text-slate-50) flex justify-end bg-slate-300 px-6 py-1 text-slate-900 transition-colors'>
        <button
          id='viewControls'
          title='Switch View'
          class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) flex items-center justify-center gap-2 rounded-md px-3 font-medium transition-colors'>
          <FontAwesomeIcon icon={faEye} />
          All
        </button>
      </div>
    </section>
  );
};
