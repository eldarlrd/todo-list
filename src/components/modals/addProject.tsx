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
import { IsModalVisible } from '@/components/modals/modalWindow.tsx';
import { PROJECT_ICONS } from '@/config/icons.tsx';

interface ProjectOptions {
  actionMode: string;
  setIsVisible: Dispatch<StateUpdater<boolean>>;
  handleAction: ({
    projectTitle,
    projectIcon
  }: {
    projectTitle: string;
    projectIcon: string;
  }) => Promise<void>;
  isLoading: boolean;
  currentTitle?: string;
  currentIcon?: string;
}

export const AddProject = ({
  actionMode,
  setIsVisible,
  handleAction,
  isLoading,
  currentTitle,
  currentIcon
}: ProjectOptions): JSX.Element => {
  const [projectTitle, setProjectTitle] = useState('');
  const [projectIcon, setProjectIcon] = useState(PROJECT_ICONS[0].key);
  const [isDisabled, setIsDisabled] = useState(true);
  const isModalVisible = useContext(IsModalVisible);

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
    setIsDisabled(!projectTitle.trim().length);
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
                icon.key === projectIcon ?
                  'border-transparent bg-violet-800 text-slate-50 dark:bg-pink-600'
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
          isLoading={isLoading}
          handleConfirm={(): void => {
            void handleAction({
              projectTitle: projectTitle.trim(),
              projectIcon
            });
            setIsVisible(false);
          }}
        />
      </span>
    </form>
  );
};
