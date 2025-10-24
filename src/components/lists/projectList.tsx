import { DndContext, type DragEndEvent, closestCenter } from '@dnd-kit/core';
import {
  restrictToParentElement,
  restrictToVerticalAxis
} from '@dnd-kit/modifiers';
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy
} from '@dnd-kit/sortable';
import { useState } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { Project } from '@/components/tasks/project.tsx';
import { useAppSelector } from '@/hooks/useAppState.ts';
import { useStateSync } from '@/hooks/useStateSync.ts';
import { useVisible } from '@/hooks/useVisible.ts';
import { type ProjectDetails } from '@/slices/projectSlice.ts';

export const ProjectList = ({
  panelTabIndex
}: {
  panelTabIndex?: number;
}): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const { projectList } = useAppSelector(state => state.projectReducer);
  const { syncProjects } = useStateSync();

  const handleMove = async (projects: ProjectDetails[]): Promise<void> => {
    try {
      await syncProjects(projects);
    } catch (error: unknown) {
      if (error instanceof Error)
        console.error('Failed to sort projects:', error);
    }
  };

  // Drag & Drop Sorting
  const onDragEnd = (e: DragEndEvent): void => {
    const { active, over } = e;

    if (active.id !== over?.id) {
      const prevIndex = projectList.findIndex(
        project => project.id === active.id
      );
      const newIndex = projectList.findIndex(
        project => project.id === over?.id
      );

      void handleMove(arrayMove(projectList, prevIndex, newIndex));
    }
  };

  return (
    <>
      <div
        id='project-list'
        class='-mt-2 flex h-full min-w-full flex-col gap-1 overflow-y-auto px-3 py-1.5'>
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={onDragEnd}
          modifiers={[restrictToVerticalAxis, restrictToParentElement]}>
          <SortableContext
            items={projectList}
            strategy={verticalListSortingStrategy}>
            {projectList.length ?
              projectList.map(project => (
                <Project
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  iconKey={project.iconKey}
                  panelTabIndex={panelTabIndex}
                  setIsVisible={setIsVisible}
                  setModalContent={setModalContent}
                />
              ))
            : <p class='flex justify-center text-xl text-slate-700 dark:text-slate-300'>
                Empty
              </p>
            }
          </SortableContext>
        </DndContext>
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
