import { Menu, Plus, Star, Trash2, X } from 'lucide-preact';
import { type StateUpdater, useState, useEffect } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ThemeToggle } from '@/components/controls/themeToggle.tsx';
import { AddProject } from '@/components/modals/addProject.tsx';
import { DeleteModal } from '@/components/modals/deleteModal.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useVisible } from '@/hooks/useVisible.ts';

interface DrawerControls {
  isDrawerOpen?: boolean | undefined;
  setIsDrawerOpen: StateUpdater<boolean | undefined>;
}

const MobileBar = ({ setIsDrawerOpen }: DrawerControls): JSX.Element => {
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth >= 1024 ? setIsDrawerOpen(false) : null;
    });
  }, [setIsDrawerOpen]);

  return (
    <nav
      id='mobile-bar'
      class='dark:(bg-slate-800, text-pink-500) absolute top-0 min-w-full select-none bg-slate-100 p-3 text-2xl text-violet-800 transition-colors lg:hidden'>
      <button
        id='hamburger-menu'
        type='button'
        onClick={(): void => {
          setIsDrawerOpen(true);
        }}
        title='Open Drawer'
        class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) mr-2 w-12 rounded-lg px-3 py-2 leading-4 transition-colors'>
        <Menu aria-label='Bars' strokeWidth='2.25' class='scale-125' />
      </button>
      <ThemeToggle identifier='mobile-theme-toggle' />
    </nav>
  );
};

const SidePanel = ({
  isDrawerOpen,
  setIsDrawerOpen
}: DrawerControls): JSX.Element => {
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const { ref, isVisible, setIsVisible } = useVisible(false);

  return (
    <nav
      id='sidebar'
      class={`${
        isDrawerOpen
          ? 'lg:(relative, min-w-0) absolute top-0 min-h-full w-full transition-all duration-500'
          : 'lg:(ml-0, transition-all) -ml-72'
      } dark:(bg-slate-700, text-pink-400) z-10 w-72 select-none flex-col items-start overflow-y-auto bg-slate-200 p-3 text-violet-900 lg:flex xl:w-80 2xl:w-96`}>
      <span class='flex min-w-full gap-2 text-2xl'>
        <button
          id='add-project'
          type='button'
          onClick={(): void => {
            setIsVisible(true);
            setModalContent(
              <AddProject key='Add Project' setIsVisible={setIsVisible} />
            );
          }}
          class='hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) flex grow items-center gap-1.5 break-all rounded-lg bg-violet-800 p-3 font-medium leading-4 text-slate-50 transition-colors dark:bg-pink-600'>
          <Plus aria-label='Plus Sign' strokeWidth='2.25' class='scale-110' />
          Add Project
        </button>
        {isDrawerOpen ? (
          <button
            id='mobile-close-drawer'
            type='button'
            onClick={(): void => {
              setIsDrawerOpen(false);
            }}
            title='Close Drawer'
            class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded-lg p-3 leading-4 transition-colors lg:hidden'>
            <X aria-label='X' strokeWidth='2.25' class='scale-110' />
          </button>
        ) : null}
      </span>

      <div id='project-list' class='mt-2 flex min-w-full flex-col gap-2'>
        <span id='project-title' class='flex'>
          <button
            type='button'
            class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) flex grow items-center gap-1.5 break-all rounded-l-lg px-3 py-2 text-xl leading-4 text-slate-900 duration-150 dark:text-slate-50'>
            <Star aria-label='Star' />
            Default
          </button>
          <button
            type='button'
            onClick={(): void => {
              setIsVisible(true);
              setModalContent(
                <DeleteModal key='Delete Project' setIsVisible={setIsVisible} />
              );
            }}
            title='Delete Project'
            class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) z-10 flex items-center gap-1.5 break-all rounded-r-lg px-3 text-xl leading-4 text-slate-900 duration-150 dark:text-slate-50'>
            <Trash2 aria-label='Trash' />
          </button>
        </span>
      </div>
      <ModalWindow
        modalContent={modalContent}
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={ref}
      />
    </nav>
  );
};

export const Sidebar = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>();
  return (
    <>
      <MobileBar setIsDrawerOpen={setIsDrawerOpen} />
      <SidePanel
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
      />
    </>
  );
};
