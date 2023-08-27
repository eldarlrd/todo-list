import { type JSX } from 'preact/jsx-runtime';
import {
  type StateUpdater,
  useState,
  useEffect,
  useContext
} from 'preact/hooks';
import { ModalVisible } from '@/components/modals/modalWindow.tsx';

export const AddProject = ({
  setVisible
}: {
  setVisible: StateUpdater<boolean>;
}): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const visible = useContext(ModalVisible);

  useEffect(() => {
    setTitle('');
  }, [visible]);

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
          name='projectTitle'
          type='text'
          minLength={1}
          maxLength={128}
          value={title}
          required
          onInput={(e: Event): void => {
            setTitle((e.target as HTMLInputElement).value);
          }}
        />
      </label>
      <label class='flex flex-col gap-1'>
        <span class='font-medium'>Icon</span>
        <input
          type='radio'
          onClick={(): void => {
            setVisible(false);
          }}
        />
      </label>
    </form>
  );
};
