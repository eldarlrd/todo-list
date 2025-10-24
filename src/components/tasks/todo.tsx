import { format, isPast, isToday, isTomorrow } from 'date-fns';
import { PenSquare, Trash2, CheckCircle2, HelpCircle } from 'lucide-preact';
import { type Dispatch, type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { AddTodo, PRIORITY_OPTIONS } from '@/components/modals/addTodo.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { ERROR_TODO_DELETE, ERROR_TODO_EDIT } from '@/config/errors.ts';
import { SUCCESS_TODO_DELETE, SUCCESS_TODO_EDIT } from '@/config/successes.ts';
import { useAppSelector } from '@/hooks/useAppState.ts';
import { useStateSync } from '@/hooks/useStateSync.ts';
import { errorToast, successToast } from '@/lib/toast.ts';
import { type TodoDetails } from '@/slices/todoSlice.ts';

interface TodoProps extends TodoDetails {
  setIsVisible: Dispatch<StateUpdater<boolean>>;
  setModalContent: Dispatch<StateUpdater<JSX.Element | undefined>>;
}

export const Todo = ({
  id,
  project,
  title,
  description,
  dueDate,
  priority,
  stage,
  isDone,
  setIsVisible,
  setModalContent
}: TodoProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { toggleTodo, modifyTodo, removeTodo } = useStateSync();

  const { projectList } = useAppSelector(state => state.projectReducer);
  const currProject = projectList.find(p => p.id === project);
  const todoDueDate = new Date(dueDate);

  const handleEditTodo = async ({
    project,
    title,
    description,
    dueDate,
    priority,
    stage
  }: TodoDetails): Promise<void> => {
    try {
      setIsEditing(true);

      await modifyTodo({
        id,
        project,
        title,
        description,
        dueDate,
        priority,
        stage,
        isDone
      });

      setIsVisible(false);

      successToast(SUCCESS_TODO_EDIT);
    } catch (error: unknown) {
      if (error instanceof Error) {
        errorToast(ERROR_TODO_EDIT);
        console.error(ERROR_TODO_EDIT, error);
      }
    } finally {
      setIsEditing(false);
    }
  };

  const handleDelete = async (): Promise<void> => {
    try {
      setIsDeleting(true);

      await removeTodo(id);

      successToast(SUCCESS_TODO_DELETE);
    } catch (error) {
      if (error instanceof Error) {
        errorToast(ERROR_TODO_DELETE);
        console.error(ERROR_TODO_DELETE, error);
      }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div
        id={id}
        class={`${
          isDone ?
            'dark:(bg-sky-900) bg-emerald-100'
          : 'dark:(bg-slate-800) bg-slate-100'
        } mt-3.5 flex justify-between gap-6 rounded px-4 py-3 drop-shadow-sm duration-150 xl:text-lg`}>
        <div class='flex flex-col gap-1.5 break-all'>
          <p class='flex -skew-x-6 items-center gap-0.5 text-slate-600 dark:text-slate-400'>
            <span class='scale-75'>
              {PROJECT_ICONS.find(p => p.key === currProject?.iconKey)?.icon}
            </span>
            {currProject?.title}
          </p>
          <p
            class={`${
              isDone ? 'line-through' : ''
            } -my-1 font-medium decoration-2`}>
            {title}
          </p>
          <p>{description}</p>
          <p class='mt-1 -mb-1'>
            {format(todoDueDate, 'eee., d MMM. ’yy')}
            {isTomorrow(todoDueDate) ?
              ' • Tomorrow'
            : isToday(todoDueDate) ?
              ' • Today'
            : isPast(todoDueDate) ?
              ' • Overdue'
            : ''}
          </p>
          <p class='flex items-center gap-1.5'>
            <span
              class={`bg-${
                PRIORITY_OPTIONS.find(p => p.value === priority)?.color ?? ''
              } block aspect-square w-4 rounded-full`}
            />
            {priority}
          </p>
        </div>

        <div class='flex flex-col items-end justify-between'>
          <span class='flex gap-2 sm:gap-3'>
            <button
              type='button'
              title='Edit Todo'
              class='hover:(text-violet-900, dark:text-pink-400) flex scale-105 items-center gap-1.5 rounded font-medium duration-150'
              onClick={(): void => {
                setIsVisible(true);
                setModalContent(
                  <AddTodo
                    key='Edit Todo'
                    actionMode='Edit'
                    setIsVisible={setIsVisible}
                    isLoading={isEditing}
                    handleAction={handleEditTodo}
                    currentTodo={{
                      id,
                      project,
                      title,
                      description,
                      dueDate,
                      priority,
                      stage,
                      isDone
                    }}
                  />
                );
              }}>
              <PenSquare aria-label='Pen' />
              <span class='hidden sm:inline xl:text-lg'>Edit</span>
            </button>

            <button
              type='button'
              title='Delete Todo'
              class='hover:(text-rose-900, dark:text-rose-400) flex scale-105 items-center gap-1.5 rounded font-medium duration-150'
              onClick={(): void => {
                setIsVisible(true);
                setModalContent(
                  <DeleteModal
                    key='Delete Todo'
                    setIsVisible={setIsVisible}
                    taskTitle={title}
                    taskMode='Todo'
                    isLoading={isDeleting}
                    handleDelete={handleDelete}
                  />
                );
              }}>
              <Trash2 aria-label='Trash' />
              <span class='hidden sm:inline xl:text-lg'>Delete</span>
            </button>
          </span>

          <button
            type='button'
            title='Check Done'
            class='hover:(text-emerald-900, dark:text-sky-400) flex scale-110 items-center gap-1.5 rounded font-medium duration-150'
            onClick={(): void => {
              void toggleTodo(id, !isDone);
            }}>
            {isDone ?
              <CheckCircle2 aria-label='Check Mark' />
            : <HelpCircle aria-label='Question Mark' />}
            <span class='hidden sm:inline xl:text-lg'>
              {isDone ? 'Done' : 'Working'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};
