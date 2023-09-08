import {
  type StateUpdater,
  useState,
  useEffect,
  useContext
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { IsModalVisible } from '@/components/modals/modalWindow.tsx';

export const AddProject = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  const [projectTitle, setProjectTitle] = useState<string>();
  const isModalVisible = useContext(IsModalVisible);

  useEffect(() => {
    setProjectTitle('');
  }, [isModalVisible]);

  return (
    <form class='flex flex-col gap-3'>
      <label class='flex flex-col gap-1 xl:text-lg'>
        <span class='font-medium'>
          Title
          <span class='text-violet-900 dark:text-pink-300'>*</span>
        </span>
        <input
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded-md bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
          title=''
          name='project-title'
          type='text'
          minLength={1}
          maxLength={128}
          value={projectTitle}
          required
          onInput={(e: Event): void => {
            setProjectTitle((e.target as HTMLInputElement).value);
          }}
        />
      </label>

      <label class='flex flex-col gap-1 xl:text-lg'>
        <span class='font-medium'>Icon</span>
        <input
          type='radio'
          onClick={(): void => {
            setIsVisible(false);
          }}
        />
      </label>

      <span class='flex justify-end gap-2'>
        <button
          id='project-cancel'
          type='button'
          class='hover:(bg-rose-700, border-rose-700, text-slate-50, active:(bg-rose-800, border-rose-800)) border-1 md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md border-current py-1.5 text-lg font-medium text-rose-700 transition-all dark:text-slate-50 lg:w-28'>
          Cancel
        </button>
        <button
          id='project-add'
          type='button'
          class='hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md bg-emerald-800 py-1.5 text-lg font-medium text-white transition-all dark:bg-sky-600 lg:w-28'>
          Add
        </button>
      </span>
    </form>
  );
};
