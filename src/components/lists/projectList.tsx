import { Trash2 } from 'lucide-preact';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { projectActions } from '@/slices/projectSlice.ts';

export const ProjectList = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();

  const dispatch = useAppDispatch();
  const { setSelectedProject, deleteProject } = projectActions;
  const { projectList, selectedProject } = useAppSelector(
    state => state.projectReducer
  );

  return (
    <>
      <div
        id='project-list'
        class='-mt-2 flex h-full min-w-full flex-col gap-1 overflow-y-auto px-3 py-1.5'>
        {projectList.map(project => (
          <button
            type='button'
            id={project.id}
            key={project.id}
            class={`${
              project.id === selectedProject
                ? 'bg-slate-50, dark:bg-slate-800'
                : ''
            } hover:(bg-slate-50, dark:bg-slate-800) flex items-start justify-between gap-1.5 rounded px-3 py-2 text-xl text-slate-900 duration-150 dark:text-slate-50`}
            onClick={(): void => {
              dispatch(setSelectedProject(project.id));
            }}>
            <span class='flex max-w-full grow gap-1.5 break-all leading-6'>
              {PROJECT_ICONS.find(e => e.key === project.iconKey)?.icon}
              {project.title}
            </span>
            <button
              type='button'
              title='Delete Project'
              class='hover:(text-rose-900, dark:text-rose-400) rounded duration-150'
              onClick={(): void => {
                setIsVisible(true);
                setModalContent(
                  <DeleteModal
                    key='Delete Project'
                    setIsVisible={setIsVisible}
                    taskTitle={project.title}
                    taskMode='Project'
                    handleDelete={(): void => {
                      dispatch(deleteProject(project.id));
                      dispatch(
                        setSelectedProject(
                          projectList[0]?.id !== project.id
                            ? projectList[0]?.id
                            : projectList[1]?.id
                        )
                      );
                    }}
                  />
                );
              }}>
              <Trash2 aria-label='Trash' />
            </button>
          </button>
        ))}
      </div>

      <ModalWindow
        modalContent={modalContent}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </>
  );
};
