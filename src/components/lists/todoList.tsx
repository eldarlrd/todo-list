import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ControlPanel } from '@/components/controls/controlPanel.tsx';
import { STAGE_OPTIONS } from '@/components/modals/addTodo.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { Todo } from '@/components/tasks/todo.tsx';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { useVisible } from '@/hooks/useVisible.ts';

export const TodoList = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();

  const { todoList } = useAppSelector(state => state.todoReducer);
  const todoArr = todoList.filter(e => e.stage === STAGE_OPTIONS[0]);
  const inProgressArr = todoList.filter(e => e.stage === STAGE_OPTIONS[1]);
  const doneArr = todoList.filter(e => e.stage === STAGE_OPTIONS[2]);

  return (
    <>
      <section
        id='list'
        class='flex max-w-full grow flex-col bg-slate-50 transition-colors dark:bg-slate-900'>
        <ControlPanel />
        <div tabIndex={-1} class='overflow-y-auto px-3 pb-3.5'>
          {todoList.length ? (
            <>
              {todoArr.length ? (
                <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
                  Todo
                </p>
              ) : null}
              {todoArr.map(todo => (
                <Todo
                  id={todo.id}
                  key={todo.id}
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

              {inProgressArr.length ? (
                <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
                  In Progress
                </p>
              ) : null}
              {inProgressArr.map(todo => (
                <Todo
                  id={todo.id}
                  key={todo.id}
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

              {doneArr.length ? (
                <p class='mx-2 mt-3.5 -skew-x-6 select-none text-xl font-bold xl:text-2xl'>
                  Done
                </p>
              ) : null}
              {doneArr.map(todo => (
                <Todo
                  id={todo.id}
                  key={todo.id}
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
          ) : (
            <p class='mt-4 flex select-none justify-center text-lg text-slate-600 dark:text-slate-400 xl:text-xl'>
              Empty
            </p>
          )}
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
