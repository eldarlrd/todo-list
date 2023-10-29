import { format, isPast, isToday, isTomorrow } from 'date-fns';
import { PenSquare, Trash2, CheckCircle2, HelpCircle } from 'lucide-preact';
import { type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { AddTodo, PRIORITY_OPTIONS } from '@/components/modals/addTodo.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { todoActions } from '@/slices/todoSlice.ts';

interface TodoDetails {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  stage: string;
  isDone: boolean;
}

interface TodoProps extends TodoDetails {
  setIsVisible: StateUpdater<boolean>;
  setModalContent: StateUpdater<JSX.Element | undefined>;
}

const Todo = ({
  id,
  title,
  description,
  dueDate,
  priority,
  stage,
  isDone,
  setIsVisible,
  setModalContent
}: TodoProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { checkTodo, editTodo, deleteTodo } = todoActions;
  const { projectList, selectedProject } = useAppSelector(
    state => state.projectReducer
  );

  const todoDueDate = new Date(dueDate);

  return (
    <>
      <div
        id={id}
        class={`${
          isDone
            ? 'dark:(bg-sky-900) bg-emerald-100'
            : 'dark:(bg-slate-800) bg-slate-100'
        } mt-3.5 flex justify-between gap-6 rounded px-4 py-3 drop-shadow-sm duration-150 xl:text-lg`}>
        <div class='flex flex-col gap-1.5 break-all'>
          <p class='-skew-x-6 text-slate-600 dark:text-slate-400'>
            {projectList.find(e => e.id === selectedProject)?.title}
          </p>
          <p
            class={`${
              isDone ? 'line-through' : ''
            } -my-1 font-medium decoration-2`}>
            {title}
          </p>
          <p>{description}</p>
          <p class='-mb-1 mt-1'>
            {format(todoDueDate, 'eee, d MMM. y')}
            {isToday(todoDueDate) ? ' | Today' : ''}
            {isTomorrow(todoDueDate) ? ' | Tomorrow' : ''}
            {isPast(todoDueDate) ? ' | Overdue' : ''}
          </p>
          <p class='flex items-center gap-1.5'>
            <span
              class={`bg-${PRIORITY_OPTIONS.find(e => e.value === priority)
                ?.color} block aspect-square w-4 rounded-full`}
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
                    handleAction={({
                      title,
                      description,
                      dueDate,
                      priority,
                      stage
                    }: TodoDetails): void => {
                      dispatch(
                        editTodo({
                          id,
                          title,
                          description,
                          dueDate,
                          priority,
                          stage,
                          isDone
                        })
                      );
                    }}
                    currentTodo={{
                      id,
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
                    handleDelete={(): void => {
                      dispatch(deleteTodo(id));
                    }}
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
              dispatch(checkTodo({ id, isDone: !isDone }));
            }}>
            {isDone ? (
              <CheckCircle2 aria-label='Check Mark' />
            ) : (
              <HelpCircle aria-label='Question Mark' />
            )}
            <span class='hidden sm:inline xl:text-lg'>
              {isDone ? 'Done' : 'Working'}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export { type TodoDetails, Todo };
