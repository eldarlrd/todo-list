import { isBefore } from 'date-fns';
import { type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { SORT_OPTIONS } from '@/components/controls/sortMenu.tsx';
import { VIEW_OPTIONS } from '@/components/controls/viewMenu.tsx';
import {
  PRIORITY_OPTIONS,
  STAGE_OPTIONS
} from '@/components/modals/addTodo.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { Todo, type TodoDetails } from '@/components/tasks/todo.tsx';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { useVisible } from '@/hooks/useVisible.ts';

interface ViewProps {
  todoList: {
    id: string;
    project: string;
    title: string;
    description: string;
    dueDate: string;
    priority: string;
    stage: string;
    isDone: boolean;
  }[];
  viewMode: string | undefined;
  setIsVisible: StateUpdater<boolean>;
  setModalContent: StateUpdater<JSX.Element | undefined>;
}

const ViewTodo = ({
  todoList,
  viewMode,
  setIsVisible,
  setModalContent
}: ViewProps): JSX.Element => {
  const todoArr = todoList.filter(e => e.stage === STAGE_OPTIONS[0]);

  if (
    todoArr.length &&
    (viewMode === VIEW_OPTIONS[0] || viewMode === VIEW_OPTIONS[1])
  )
    return (
      <>
        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          Todo
        </p>

        {todoArr.map(todo => (
          <Todo
            id={todo.id}
            key={todo.id}
            project={todo.project}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            priority={todo.priority}
            stage={todo.stage}
            isDone={todo.isDone}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
        ))}
      </>
    );
  return <></>;
};

const ViewInProgress = ({
  todoList,
  viewMode,
  setIsVisible,
  setModalContent
}: ViewProps): JSX.Element => {
  const inProgressArr = todoList.filter(e => e.stage === STAGE_OPTIONS[1]);

  if (
    inProgressArr.length &&
    (viewMode === VIEW_OPTIONS[0] || viewMode === VIEW_OPTIONS[2])
  )
    return (
      <>
        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          In Progress
        </p>

        {inProgressArr.map(todo => (
          <Todo
            id={todo.id}
            key={todo.id}
            project={todo.project}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            priority={todo.priority}
            stage={todo.stage}
            isDone={todo.isDone}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
        ))}
      </>
    );
  return <></>;
};

const ViewDone = ({
  todoList,
  viewMode,
  setIsVisible,
  setModalContent
}: ViewProps): JSX.Element => {
  const doneArr = todoList.filter(e => e.stage === STAGE_OPTIONS[2]);

  if (
    doneArr.length &&
    (viewMode === VIEW_OPTIONS[0] || viewMode === VIEW_OPTIONS[3])
  )
    return (
      <>
        <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
          Done
        </p>

        {doneArr.map(todo => (
          <Todo
            id={todo.id}
            key={todo.id}
            project={todo.project}
            title={todo.title}
            description={todo.description}
            dueDate={todo.dueDate}
            priority={todo.priority}
            stage={todo.stage}
            isDone={todo.isDone}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
        ))}
      </>
    );
  return <></>;
};

export const TodoList = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();

  const { selectedProject } = useAppSelector(state => state.projectReducer);
  const { todoList, viewMode, sortMode, sortAscending } = useAppSelector(
    state => state.todoReducer
  );

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

  return (
    <>
      <section
        id='list'
        class='flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
        <ControlPanel />
        <div tabIndex={-1} class='overflow-y-auto px-3 pb-3.5'>
          <p class='only-child:flex mt-4 hidden select-none justify-center text-lg text-slate-600 xl:text-xl dark:text-slate-400'>
            Empty
          </p>
          <ViewTodo
            todoList={
              sortMode === Object.keys(SORT_OPTIONS)[0] ?
                todoList
                  .filter(e => e.project === selectedProject)
                  .sort(alphabetize)
              : sortMode === Object.keys(SORT_OPTIONS)[1] ?
                todoList
                  .filter(e => e.project === selectedProject)
                  .sort(prioritize)
              : sortMode === Object.keys(SORT_OPTIONS)[2] ?
                todoList.filter(e => e.project === selectedProject).sort(byDate)
              : todoList.filter(e => e.project === selectedProject)
            }
            viewMode={viewMode}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
          <ViewInProgress
            todoList={
              sortMode === Object.keys(SORT_OPTIONS)[0] ?
                todoList
                  .filter(e => e.project === selectedProject)
                  .sort(alphabetize)
              : sortMode === Object.keys(SORT_OPTIONS)[1] ?
                todoList
                  .filter(e => e.project === selectedProject)
                  .sort(prioritize)
              : sortMode === Object.keys(SORT_OPTIONS)[2] ?
                todoList.filter(e => e.project === selectedProject).sort(byDate)
              : todoList.filter(e => e.project === selectedProject)
            }
            viewMode={viewMode}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
          <ViewDone
            todoList={
              sortMode === Object.keys(SORT_OPTIONS)[0] ?
                todoList
                  .filter(e => e.project === selectedProject)
                  .sort(alphabetize)
              : sortMode === Object.keys(SORT_OPTIONS)[1] ?
                todoList
                  .filter(e => e.project === selectedProject)
                  .sort(prioritize)
              : sortMode === Object.keys(SORT_OPTIONS)[2] ?
                todoList.filter(e => e.project === selectedProject).sort(byDate)
              : todoList.filter(e => e.project === selectedProject)
            }
            viewMode={viewMode}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
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
