import { formatISO, isToday, isFuture, isValid } from 'date-fns';
import {
  type StateUpdater,
  useState,
  useEffect,
  useContext,
  type Dispatch
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CancelButton } from '@/components/buttons/cancelButton.tsx';
import { ConfirmButton } from '@/components/buttons/confirmButton.tsx';
import { PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { IsModalVisible } from '@/components/modals/modalWindow.tsx';
import { STAGE_OPTIONS, VIEW_OPTIONS } from '@/config/globals.ts';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import { useStateSync } from '@/hooks/useStateSync.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions, type TodoDetails } from '@/slices/todoSlice.ts';

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
  setIsVisible: Dispatch<StateUpdater<boolean>>;
  handleAction: ({
    project,
    title,
    description,
    dueDate,
    priority,
    stage,
    isDone
  }: TodoDetails) => void | Promise<void>;
  isLoading: boolean;
  currentTodo?: TodoDetails;
}

const AddTodo = ({
  actionMode,
  setIsVisible,
  handleAction,
  isLoading,
  currentTodo
}: TodoOptions): JSX.Element => {
  const [todo, setTodo] = useState<TodoDetails>(emptyTodo);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const isModalVisible = useContext(IsModalVisible);
  const { createProject } = useStateSync();

  const { setSelectedProject } = projectActions;
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
    setTodo(
      (prevState): TodoDetails => ({
        ...prevState,
        isDone: todo.stage === STAGE_OPTIONS[2]
      })
    );
  }, [todo.stage]);

  // Handle Editing
  useEffect(() => {
    const handleEditing = async (): Promise<void> => {
      try {
        const id = await createProject({
          order: 0,
          title: 'Default',
          iconKey: PROJECT_ICONS[0].key
        });

        dispatch(setSelectedProject(id));
      } catch (error: unknown) {
        if (error instanceof Error)
          console.error('Failed to add project:', error);
      }
    };

    if (currentTodo?.title) setTodo(currentTodo);
    else {
      setTodo(emptyTodo);

      if (isModalVisible && !selectedProject) void handleEditing();
    }
  }, [
    createProject,
    currentTodo,
    dispatch,
    isModalVisible,
    selectedProject,
    setSelectedProject
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
      class='flex h-full flex-col gap-3 select-none'
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
          isLoading={isLoading}
          handleConfirm={async (): Promise<void> => {
            todo.project = selectedProject;
            todo.title = todo.title.trim();
            todo.description = todo.description.trim();
            if (viewMode !== VIEW_OPTIONS[0]) dispatch(setViewMode(todo.stage));
            try {
              await handleAction(todo);
            } finally {
              setIsVisible(false);
            }
          }}
        />
      </span>
    </form>
  );
};

export { PRIORITY_OPTIONS, AddTodo };
