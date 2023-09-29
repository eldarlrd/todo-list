import { formatISO } from 'date-fns';
import {
  type StateUpdater,
  useState,
  useEffect,
  useContext
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { IsModalVisible } from '@/components/modals/modalWindow.tsx';

interface TodoDetails {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  stage: string;
}

const emptyTodo: TodoDetails = {
  title: '',
  description: '',
  dueDate: formatISO(new Date(), { representation: 'date' }),
  priority: '',
  stage: ''
};

export const AddTodo = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  const [todo, setTodo] = useState(emptyTodo);

  const isModalVisible = useContext(IsModalVisible);

  useEffect(() => {
    setTodo(emptyTodo);
  }, [isModalVisible]);

  return (
    <form class='flex h-full select-none flex-col gap-3'>
      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <span class='font-medium'>
          Title
          <span class='text-violet-900 dark:text-pink-300'>*</span>
        </span>
        <input
          title=''
          type='text'
          name='todo-title'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded-md bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
          minLength={1}
          maxLength={128}
          value={todo.title}
          required
          onInput={(e: Event): void => {
            setTodo(
              (prevState): TodoDetails => ({
                ...prevState,
                title: (e.target as HTMLInputElement).value
              })
            );
          }}
        />
      </label>

      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <span class='font-medium'>Description</span>
        <input
          title=''
          type='text'
          name='todo-description'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded-md bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
          maxLength={256}
          value={todo.description}
          onInput={(e: Event): void => {
            setTodo(
              (prevState): TodoDetails => ({
                ...prevState,
                description: (e.target as HTMLInputElement).value
              })
            );
          }}
        />
      </label>

      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <span class='font-medium'>
          Due Date<span class='text-violet-900 dark:text-pink-300'>*</span>
        </span>
        <input
          title=''
          type='date'
          name='todo-date'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded-md bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
          max='9999-12-31'
          min={todo.dueDate}
          value={todo.dueDate}
          required
          onInput={(e: Event): void => {
            setTodo(
              (prevState): TodoDetails => ({
                ...prevState,
                dueDate: (e.target as HTMLInputElement).value
              })
            );
          }}
        />
      </label>

      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <span class='font-medium'>Priority</span>
        <input
          title=''
          type='text'
          name='todo-priority'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded-md bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
          maxLength={256}
          value={todo.priority}
          onInput={(e: Event): void => {
            setTodo(
              (prevState): TodoDetails => ({
                ...prevState,
                priority: (e.target as HTMLInputElement).value
              })
            );
          }}
        />
      </label>

      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <span class='font-medium'>Stage</span>
        <input
          title=''
          type='text'
          name='todo-stage'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded-md bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150'
          maxLength={256}
          value={todo.stage}
          onInput={(e: Event): void => {
            setTodo(
              (prevState): TodoDetails => ({
                ...prevState,
                stage: (e.target as HTMLInputElement).value
              })
            );
          }}
        />
      </label>

      <span class='flex justify-end gap-2 pt-1.5'>
        <button
          type='button'
          id='todo-cancel'
          class='hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md py-1.5 text-lg font-medium transition-all lg:w-28'
          onClick={(): void => {
            setIsVisible(false);
          }}>
          Cancel
        </button>
        <button
          type='button'
          id='todo-add'
          class='hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded-md bg-emerald-800 py-1.5 text-lg font-medium text-white transition-all dark:bg-sky-600 lg:w-28'>
          Add
        </button>
      </span>
    </form>
  );
};
