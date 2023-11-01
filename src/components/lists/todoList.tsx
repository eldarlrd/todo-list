import { type StateUpdater, useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { VIEW_OPTIONS } from '@/components/controls/viewMenu.tsx';
import { STAGE_OPTIONS } from '@/components/modals/addTodo.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { Todo } from '@/components/tasks/todo.tsx';
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
  const { todoList, viewMode } = useAppSelector(state => state.todoReducer);

  return (
    <>
      <section
        id='list'
        class='flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
        <ControlPanel />
        <div tabIndex={-1} class='overflow-y-auto px-3 pb-3.5'>
          <p class='only-child:flex mt-4 hidden select-none justify-center text-lg text-slate-600 dark:text-slate-400 xl:text-xl'>
            Empty
          </p>
          <ViewTodo
            todoList={todoList.filter(e => e.project === selectedProject)}
            viewMode={viewMode}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
          <ViewInProgress
            todoList={todoList.filter(e => e.project === selectedProject)}
            viewMode={viewMode}
            setIsVisible={setIsVisible}
            setModalContent={setModalContent}
          />
          <ViewDone
            todoList={todoList.filter(e => e.project === selectedProject)}
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
