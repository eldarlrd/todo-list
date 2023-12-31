import { formatISO, isToday, isFuture, isValid } from 'date-fns';
import { nanoid } from 'nanoid';
import {
  type StateUpdater,
  useState,
  useEffect,
  useContext
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CancelButton } from '@/components/buttons/cancelButton.tsx';
import { ConfirmButton } from '@/components/buttons/confirmButton.tsx';
import { VIEW_OPTIONS } from '@/components/controls/viewMenu.tsx';
import { PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { IsModalVisible } from '@/components/modals/modalWindow.tsx';
import { type TodoDetails } from '@/components/tasks/todo.tsx';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';

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
  id: '',
  project: '',
  title: '',
  description: '',
  dueDate: formatISO(new Date(), { representation: 'date' }),
  priority: PRIORITY_OPTIONS[0].value,
  stage: STAGE_OPTIONS[0],
  isDone: false
};

interface TodoOptions {
  actionMode: string;
  setIsVisible: StateUpdater<boolean>;
  handleAction: ({
    project,
    title,
    description,
    dueDate,
    priority,
    stage,
    isDone
  }: TodoDetails) => void;
  currentTodo?: TodoDetails;
}

const AddTodo = ({
  actionMode,
  setIsVisible,
  handleAction,
  currentTodo
}: TodoOptions): JSX.Element => {
  const [todo, setTodo] = useState<TodoDetails>(emptyTodo);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const isModalVisible = useContext<boolean>(IsModalVisible);

  const { setSelectedProject, addNewProject } = projectActions;
  const { selectedProject } = useAppSelector(state => state.projectReducer);

  const dispatch = useAppDispatch();
  const { setViewMode } = todoActions;
  const { viewMode } = useAppSelector(state => state.todoReducer);

  const handleInput = (e: Event, detail: string): void => {
    setTodo(
      (prevState): TodoDetails => ({
        ...prevState,
        [detail]: (e.target as HTMLInputElement).value
      })
    );
  };

  // Pushes to Done
  useEffect(() => {
    if (todo.stage === STAGE_OPTIONS[2])
      setTodo(
        (prevState): TodoDetails => ({
          ...prevState,
          isDone: true
        })
      );
  }, [todo.stage]);

  // Handle Editing
  useEffect(() => {
    if (currentTodo?.title) {
      setTodo(currentTodo);
    } else {
      setTodo(emptyTodo);
      if (isModalVisible && !selectedProject) {
        const id = nanoid();
        dispatch(
          addNewProject({
            id,
            title: 'Default',
            iconKey: PROJECT_ICONS[0].key
          })
        );
        dispatch(setSelectedProject(id));
      }
    }
  }, [
    isModalVisible,
    currentTodo,
    setSelectedProject,
    selectedProject,
    addNewProject,
    dispatch
  ]);

  useEffect(() => {
    const inputDate = new Date(todo.dueDate);
    if (
      !!todo.title.trim().length &&
      isValid(inputDate) &&
      (isToday(inputDate) || isFuture(inputDate))
    )
      setIsDisabled(false);
    else setIsDisabled(true);
  }, [todo.title, todo.dueDate]);

  return (
    <form
      class='flex h-full select-none flex-col gap-3'
      onSubmit={(e: Event): void => {
        e.preventDefault();
      }}>
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
          maxLength={140}
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
          maxLength={280}
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
          min={emptyTodo.dueDate}
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

      <span class='mt-4 flex justify-end gap-2'>
        <CancelButton
          id='todo-cancel'
          handleCancel={(): void => {
            setIsVisible(false);
          }}
        />
        <ConfirmButton
          id='todo-add'
          action={actionMode}
          styleClass='hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600'
          isDisabled={isDisabled}
          handleConfirm={(): void => {
            todo.project = selectedProject;
            todo.title = todo.title.trim();
            todo.description = todo.description.trim();
            viewMode !== VIEW_OPTIONS[0]
              ? dispatch(setViewMode(todo.stage))
              : null;
            handleAction(todo);
            setIsVisible(false);
          }}
        />
      </span>
    </form>
  );
};

export { PRIORITY_OPTIONS, STAGE_OPTIONS, AddTodo };
