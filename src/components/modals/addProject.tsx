import { type JSX } from 'preact/jsx-runtime';
import {
  type StateUpdater,
  useState,
  useEffect,
  useContext
} from 'preact/hooks';

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
      <label class='flex flex-col gap-1'>
        <span class='font-medium'>
          Title
          <span class='text-violet-900 dark:text-pink-300'>*</span>
        </span>
        <input
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
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

      <label class='flex flex-col gap-1'>
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
          class='hover:(bg-rose-700, border-rose-700, text-slate-50, active:(bg-rose-800, border-rose-800)) lg:(w-32, py-3.5) xl:(w-36, py-2.5) border-1 w-20 rounded-md border-current py-3 text-lg font-medium leading-6 text-rose-700 transition-all dark:text-slate-50 sm:w-24 md:w-28'>
          Cancel
        </button>
        <button
          id='project-add'
          type='button'
          class='hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) lg:(w-32, py-3.5) xl:(w-36, py-2.5) w-20 rounded-md bg-violet-800 py-3 text-lg font-medium text-white transition-all dark:bg-pink-600 sm:w-24 md:w-28'>
          Add
        </button>
      </span>
    </form>
  );
};
