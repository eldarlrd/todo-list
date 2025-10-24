import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PenSquare, Trash2, GripVertical } from 'lucide-preact';
import { type Dispatch, type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { AddProject, PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { useAppDispatch, useAppSelector } from '@/hooks/useAppState.ts';
import { useStateSync } from '@/hooks/useStateSync.ts';
import { projectActions, type ProjectDetails } from '@/slices/projectSlice.ts';

interface ProjectProps extends ProjectDetails {
  panelTabIndex?: number;
  setIsVisible: Dispatch<StateUpdater<boolean>>;
  setModalContent: Dispatch<StateUpdater<JSX.Element | undefined>>;
}

export const Project = ({
  id,
  title,
  order,
  iconKey,
  panelTabIndex,
  setIsVisible,
  setModalContent
}: ProjectProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const { setSelectedProject } = projectActions;
  const { modifyProject, removeProject } = useStateSync();
  const { projectList, selectedProject } = useAppSelector(
    state => state.projectReducer
  );

  const handleEditProject = async ({
    projectTitle,
    projectIcon
  }: {
    projectTitle: string;
    projectIcon: string;
  }): Promise<void> => {
    try {
      await modifyProject({
        id,
        order,
        title: projectTitle,
        iconKey: projectIcon
      });
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error('Failed to edit project:', error);
    }
  };

  const handleDeleteProject = async (): Promise<void> => {
    try {
      const cleanProjectList = projectList.filter(p => p.id !== id);

      await removeProject(id);

      dispatch(setSelectedProject(cleanProjectList[0].id));
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error('Failed to delete project:', error);
    }
  };

  // Drag & Drop Movement
  const { setNodeRef, listeners, transition, transform, isDragging } =
    useSortable({
      id
    });

  const style = {
    transition,
    transform: CSS.Translate.toString(transform)
  };

  return (
    <button
      type='button'
      id={id}
      key={id}
      tabIndex={panelTabIndex}
      ref={setNodeRef}
      style={style}
      class={`${
        id === selectedProject ?
          '!border-slate-500 bg-slate-50 dark:bg-slate-800'
        : 'bg-slate-200 dark:bg-slate-700'
      } ${
        isDragging ? 'z-10 !transition-none' : ''
      } flex items-start justify-between gap-1.5 rounded border border-transparent px-3 py-2 text-xl text-slate-900 transition-colors hover:border-slate-500 active:border-slate-500 dark:text-slate-50`}
      onClick={(): void => {
        dispatch(setSelectedProject(id));
      }}>
      <span class='flex max-w-full grow gap-1.5 leading-6 break-all'>
        <span>{PROJECT_ICONS.find(p => p.key === iconKey)?.icon}</span>
        {title}
      </span>

      <span class='flex gap-2'>
        <button
          type='button'
          title='Edit Project'
          tabIndex={panelTabIndex}
          class='hover:(text-violet-900, dark:text-pink-400) rounded duration-150'
          onClick={(): void => {
            setIsVisible(true);
            setModalContent(
              <AddProject
                key='Edit Project'
                actionMode='Edit'
                setIsVisible={setIsVisible}
                handleAction={handleEditProject}
                currentTitle={title}
                currentIcon={iconKey}
              />
            );
          }}>
          <PenSquare aria-label='Pen' />
        </button>

        <button
          type='button'
          title='Delete Project'
          tabIndex={panelTabIndex}
          class='hover:(text-rose-900, dark:text-rose-400) rounded duration-150'
          onClick={(): void => {
            setIsVisible(true);
            setModalContent(
              <DeleteModal
                key='Delete Project'
                setIsVisible={setIsVisible}
                taskTitle={title}
                taskMode='Project'
                handleDelete={handleDeleteProject}
              />
            );
          }}>
          <Trash2 aria-label='Trash' />
        </button>

        <button
          {...listeners}
          type='button'
          title='Drag Project'
          tabIndex={panelTabIndex}
          class='cursor-grab rounded duration-150 active:cursor-grabbing'>
          <GripVertical aria-label='Drag' />
        </button>
      </span>
    </button>
  );
};
