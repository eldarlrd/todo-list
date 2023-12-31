import {
  Backpack,
  BookOpen,
  CircleDollarSign,
  Dumbbell,
  Gamepad2,
  Gem,
  Gift,
  Leaf,
  PenTool,
  Pizza,
  Star,
  Wrench
} from 'lucide-preact';
import {
  type StateUpdater,
  useState,
  useEffect,
  useContext
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { CancelButton } from '@/components/buttons/cancelButton.tsx';
import { ConfirmButton } from '@/components/buttons/confirmButton.tsx';
import { IsModalVisible } from '@/components/modals/modalWindow.tsx';

const PROJECT_ICONS: {
  key: string;
  icon: JSX.Element;
}[] = [
  {
    key: 'star',
    icon: <Star aria-label='Star' class='xl:scale-110' />
  },
  {
    key: 'book',
    icon: <BookOpen aria-label='Book' class='xl:scale-110' />
  },
  {
    key: 'leaf',
    icon: <Leaf aria-label='Leaf' class='xl:scale-110' />
  },
  {
    key: 'wrench',
    icon: <Wrench aria-label='Wrench' class='xl:scale-110' />
  },
  {
    key: 'pizza',
    icon: <Pizza aria-label='Pizza' class='xl:scale-110' />
  },
  {
    key: 'backpack',
    icon: <Backpack aria-label='Backpack' class='xl:scale-110' />
  },
  {
    key: 'gem',
    icon: <Gem aria-label='Gem' class='xl:scale-110' />
  },
  {
    key: 'gift',
    icon: <Gift aria-label='Gift' class='xl:scale-110' />
  },
  {
    key: 'pen',
    icon: <PenTool aria-label='Pen' class='xl:scale-110' />
  },
  {
    key: 'dumbbell',
    icon: <Dumbbell aria-label='Dumbbell' class='xl:scale-110' />
  },
  {
    key: 'gamepad',
    icon: <Gamepad2 aria-label='Gamepad' class='xl:scale-110' />
  },
  {
    key: 'dollar',
    icon: <CircleDollarSign aria-label='Dollar' class='xl:scale-110' />
  }
];

interface ProjectOptions {
  actionMode: string;
  setIsVisible: StateUpdater<boolean>;
  handleAction: ({
    projectTitle,
    projectIcon
  }: {
    projectTitle?: string;
    projectIcon: string;
  }) => void;
  currentTitle?: string;
  currentIcon?: string;
}

const AddProject = ({
  actionMode,
  setIsVisible,
  handleAction,
  currentTitle,
  currentIcon
}: ProjectOptions): JSX.Element => {
  const [projectTitle, setProjectTitle] = useState<string>();
  const [projectIcon, setProjectIcon] = useState<string>(PROJECT_ICONS[0].key);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const isModalVisible = useContext<boolean>(IsModalVisible);

  // Handle Editing
  useEffect(() => {
    if (currentTitle && currentIcon) {
      setProjectTitle(currentTitle);
      setProjectIcon(currentIcon);
    } else {
      setProjectTitle('');
      setProjectIcon(PROJECT_ICONS[0].key);
    }
  }, [isModalVisible, currentIcon, currentTitle]);

  useEffect(() => {
    setIsDisabled(!projectTitle?.trim().length);
  }, [projectTitle]);

  return (
    <form
      class='flex h-full flex-col gap-3'
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
          name='project-title'
          class='dark:(bg-slate-800, caret-pink-300) focus:(outline-violet-900, dark:outline-pink-400) rounded bg-slate-50 px-2 py-1.5 caret-violet-900 outline outline-1 outline-transparent duration-150 hover:outline-slate-500'
          minLength={1}
          maxLength={140}
          value={projectTitle}
          required
          onInput={(e: Event): void => {
            setProjectTitle((e.target as HTMLInputElement).value);
          }}
        />
      </label>

      <div class='flex flex-col gap-1.5 xl:text-lg'>
        <legend class='font-medium'>Icon</legend>
        <span
          id='project-icons'
          class='flex flex-wrap items-center justify-center gap-1.5 lg:gap-2 2xl:gap-2.5'>
          {PROJECT_ICONS.map(icon => (
            <button
              type='button'
              id={icon.key}
              key={icon.key}
              class={`${
                icon.key === projectIcon
                  ? 'border-transparent bg-violet-800 text-slate-50 dark:bg-pink-600'
                  : 'hover:(bg-slate-50, dark:bg-slate-800) border-current text-violet-900 dark:text-pink-300'
              } rounded border p-2 transition-all xl:p-2.5 2xl:p-3`}
              onClick={(): void => {
                setProjectIcon(icon.key);
              }}>
              {icon.icon}
            </button>
          ))}
        </span>
      </div>

      <span class='mt-4 flex justify-end gap-2'>
        <CancelButton
          id='project-cancel'
          handleCancel={(): void => {
            setIsVisible(false);
          }}
        />
        <ConfirmButton
          id='project-confirm'
          action={actionMode}
          styleClass='hover:(bg-emerald-700, active:bg-emerald-600, dark:(bg-sky-700, active:bg-sky-800)) bg-emerald-800 dark:bg-sky-600'
          isDisabled={isDisabled}
          handleConfirm={(): void => {
            handleAction({ projectTitle: projectTitle?.trim(), projectIcon });
            setIsVisible(false);
          }}
        />
      </span>
    </form>
  );
};

export { PROJECT_ICONS, AddProject };
