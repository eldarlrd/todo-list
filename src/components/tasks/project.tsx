import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { PenSquare, Trash2, GripVertical } from 'lucide-preact';
import { type Dispatch, type StateUpdater } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { AddProject, PROJECT_ICONS } from '@/components/modals/addProject.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { useAppDispatch } from '@/hooks/useAppDispatch.ts';
import { useAppSelector } from '@/hooks/useAppSelector.ts';
import { projectActions } from '@/slices/projectSlice.ts';
import { todoActions } from '@/slices/todoSlice.ts';

interface ProjectDetails {
  id: string;
  title: string;
  iconKey: string;
  panelTabIndex?: number;
  setIsVisible: Dispatch<StateUpdater<boolean>>;
  setModalContent: Dispatch<StateUpdater<JSX.Element | undefined>>;
}

export const Project = ({
  id,
  title,
  iconKey,
  panelTabIndex,
  setIsVisible,
  setModalContent
}: ProjectDetails): JSX.Element => {
  const dispatch = useAppDispatch();
  const { deleteProjectTodos } = todoActions;
  const { setSelectedProject, editProject, deleteProject } = projectActions;
  const { projectList, selectedProject } = useAppSelector(
    state => state.projectReducer
  );
  const { todoList } = useAppSelector(state => state.todoReducer);

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
                handleAction={({
                  projectTitle,
                  projectIcon
                }: {
                  projectTitle?: string;
                  projectIcon: string;
                }): void => {
                  dispatch(
                    editProject({
                      id,
                      title: projectTitle,
                      iconKey: projectIcon
                    })
                  );
                }}
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
                handleDelete={(): void => {
                  dispatch(deleteProject(id));
                  dispatch(
                    deleteProjectTodos(todoList.filter(e => e.project === id))
                  );
                  dispatch(
                    setSelectedProject(
                      projectList[0]?.id !== id ?
                        projectList[0]?.id
                      : projectList[1]?.id
                    )
                  );
                }}
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
