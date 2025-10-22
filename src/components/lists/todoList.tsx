import { isBefore } from 'date-fns';
import { Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { SORT_OPTIONS } from '@/components/controls/sortMenu.tsx';
import { VIEW_OPTIONS } from '@/components/controls/viewMenu.tsx';
import {
  PRIORITY_OPTIONS,
  STAGE_OPTIONS
} from '@/components/modals/addTodo.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { Todo } from '@/components/tasks/todo.tsx';
import { useAppSelector } from '@/hooks/useAppState.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { type TodoDetails } from '@/slices/todoSlice.ts';

const getSortedTodoList = (
  list: TodoDetails[],
  selectedProject: string,
  sortMode: string,
  sortAscending: number
): TodoDetails[] => {
  const alphabetize = (a: TodoDetails, b: TodoDetails): number => {
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (titleA < titleB) return sortAscending === 0 ? -1 : 1;
    if (titleA > titleB) return sortAscending === 0 ? 1 : -1;

    return 0;
  };

  const prioritize = (a: TodoDetails, b: TodoDetails): number => {
    const priorityA =
      a.priority === PRIORITY_OPTIONS[0].value ? 0
      : a.priority === PRIORITY_OPTIONS[1].value ? 1
      : 2;
    const priorityB =
      b.priority === PRIORITY_OPTIONS[0].value ? 0
      : b.priority === PRIORITY_OPTIONS[1].value ? 1
      : 2;

    if (priorityA > priorityB) return sortAscending === 0 ? -1 : 1;
    if (priorityA < priorityB) return sortAscending === 0 ? 1 : -1;

    return 0;
  };

  const byDate = (a: TodoDetails, b: TodoDetails): number => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);

    if (isBefore(dateA, dateB)) return sortAscending === 0 ? -1 : 1;
    if (isBefore(dateB, dateA)) return sortAscending === 0 ? 1 : -1;

    return 0;
  };

  const filteredList = list.filter(e => e.project === selectedProject);

  switch (sortMode) {
    case Object.keys(SORT_OPTIONS)[0]: // Title
      return filteredList.sort(alphabetize);
    case Object.keys(SORT_OPTIONS)[1]: // Priority
      return filteredList.sort(prioritize);
    case Object.keys(SORT_OPTIONS)[2]: // Due Date
      return filteredList.sort(byDate);
    default:
      return filteredList;
  }
};

export const TodoList = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();

  const { selectedProject } = useAppSelector(state => state.projectReducer);
  const { todoList, viewMode, sortMode, sortAscending } = useAppSelector(
    state => state.todoReducer
  );

  const sortedTodoList = getSortedTodoList(
    todoList,
    selectedProject,
    sortMode,
    sortAscending
  );

  const todoArr = sortedTodoList.filter(e => e.stage === STAGE_OPTIONS[0]);
  const inProgressArr = sortedTodoList.filter(
    e => e.stage === STAGE_OPTIONS[1]
  );
  const doneArr = sortedTodoList.filter(e => e.stage === STAGE_OPTIONS[2]);

  const taskList: [string, TodoDetails[]][] = [
    ['Todo', todoArr],
    ['In Progress', inProgressArr],
    ['Done', doneArr]
  ];

  return (
    <>
      <section
        id='list'
        class='flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
        <ControlPanel />
        <div
          tabIndex={-1}
          style='scrollbar-width:thin'
          class='overflow-y-auto px-3 pb-3.5'>
          <p class='only-child:flex mt-4 hidden justify-center text-lg text-slate-600 select-none xl:text-xl dark:text-slate-400'>
            Empty
          </p>

          {taskList.map(([title, tasks], i) => (
            <Fragment key={title}>
              {(
                tasks.length &&
                (viewMode === VIEW_OPTIONS[0] ||
                  viewMode === VIEW_OPTIONS[i + 1])
              ) ?
                <>
                  <p class='mx-2 mt-3.5 -skew-x-6 text-xl font-bold select-none xl:text-2xl'>
                    {title}
                  </p>

                  {tasks.map(task => (
                    <Todo
                      id={task.id}
                      key={task.id}
                      project={task.project}
                      title={task.title}
                      description={task.description}
                      dueDate={task.dueDate}
                      priority={task.priority}
                      stage={task.stage}
                      isDone={task.isDone}
                      setIsVisible={setIsVisible}
                      setModalContent={setModalContent}
                    />
                  ))}
                </>
              : <></>}
            </Fragment>
          ))}
        </div>
      </section>

      <ModalWindow
        modalContent={modalContent}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </>
  );
};
