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

const PRIORITY_OPTIONS: {
  value: string;
  color: string;
}[] = [
  {
    value: 'Low',
    color: 'teal-500'
  },
  {
    value: 'Medium',
    color: 'amber-500'
  },
  {
    value: 'High',
    color: 'rose-400'
  }
];

const STAGE_OPTIONS: string[] = ['Todo', 'In Progress', 'Done'];

const emptyTodo: TodoDetails = {
  title: '',
  description: '',
  dueDate: formatISO(new Date(), { representation: 'date' }),
  priority: PRIORITY_OPTIONS[0].value,
  stage: STAGE_OPTIONS[0]
};

export const AddTodo = ({
  setIsVisible
}: {
  setIsVisible: StateUpdater<boolean>;
}): JSX.Element => {
  const [todo, setTodo] = useState(emptyTodo);

  const isModalVisible = useContext(IsModalVisible);

  const handleInput = (e: Event, detail: string): void => {
    setTodo(
      (prevState): TodoDetails => ({
        ...prevState,
        [detail]: (e.target as HTMLInputElement).value
      })
    );
  };

  useEffect(() => {
    setTodo(emptyTodo);
  }, [isModalVisible]);

  return (
    <form class='flex h-full select-none flex-col gap-3'>
      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <legend class='font-medium'>
          Title
          <span class='text-violet-900 dark:text-pink-300'>*</span>
        </legend>
        <input
          title=''
          type='text'
          name='todo-title'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500'
          minLength={1}
          maxLength={128}
          value={todo.title}
          required
          onInput={(e: Event): void => {
            handleInput(e, 'title');
          }}
        />
      </label>

      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <legend class='font-medium'>Description</legend>
        <input
          title=''
          type='text'
          name='todo-description'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500'
          maxLength={256}
          value={todo.description}
          onInput={(e: Event): void => {
            handleInput(e, 'description');
          }}
        />
      </label>

      <label class='flex flex-col gap-1.5 xl:text-lg'>
        <legend class='font-medium'>Due Date</legend>
        <input
          title=''
          type='date'
          name='todo-date'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500'
          max='9999-12-31'
          min={todo.dueDate}
          value={todo.dueDate}
          onInput={(e: Event): void => {
            handleInput(e, 'dueDate');
          }}
        />
      </label>

      <fieldset class='flex flex-col xl:text-lg'>
        <legend class='mb-1.5 font-medium'>Priority</legend>
        <span class='flex items-center justify-evenly'>
          {PRIORITY_OPTIONS.map(priority => (
            <label key={priority.value} class='flex gap-1.5'>
              <input
                title=''
                type='radio'
                name='todo-priority'
                class={`accent-${priority.color} dark:(bg-slate-800, caret-pink-300) w-5 bg-slate-50 caret-violet-900`}
                checked={priority.value === todo.priority}
                value={priority.value}
                required
                onInput={(e: Event): void => {
                  handleInput(e, 'priority');
                }}
              />
              {priority.value}
            </label>
          ))}
        </span>
      </fieldset>

      <fieldset class='flex flex-col xl:text-lg'>
        <legend class='mb-1.5 font-medium'>Stage</legend>
        <span class='flex items-center justify-evenly'>
          {STAGE_OPTIONS.map(stage => (
            <label key={stage} class='flex gap-1.5'>
              <input
                title=''
                type='radio'
                name='todo-stage'
                class='dark:(bg-slate-800, accent-pink-300, caret-pink-300) w-5 bg-slate-50 caret-violet-900 accent-violet-400'
                checked={stage === todo.stage}
                value={stage}
                required
                onInput={(e: Event): void => {
                  handleInput(e, 'stage');
                }}
              />
              {stage}
            </label>
          ))}
        </span>
      </fieldset>

      <span class='flex justify-end gap-2 pt-3'>
        <button
          type='button'
          id='todo-cancel'
          class='hover:(bg-slate-100, active:(bg-slate-50), dark:(bg-slate-800, active:bg-slate-900)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded py-1.5 text-lg font-medium transition-all lg:w-28'
          onClick={(): void => {
            setIsVisible(false);
          }}>
          Cancel
        </button>
        <button
          type='button'
          id='todo-add'
          class='hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) md:(w-24, py-2) xl:(w-32, py-2.5, text-xl) max-h-[3rem] w-20 rounded bg-emerald-800 py-1.5 text-lg font-medium text-white transition-all dark:bg-sky-600 lg:w-28'>
          Add
        </button>
      </span>
    </form>
  );
};
