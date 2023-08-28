import { type JSX } from 'preact/jsx-runtime';
import { type StateUpdater, useState, useEffect } from 'preact/hooks';
import { useComponentVisible } from '@/hooks/useComponentVisible.ts';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { AddProject } from '@/components/modals/addProject.tsx';
import { ThemeToggle } from '@/components/controls/themeToggle.tsx';
import { Menu, Plus, X } from 'lucide-preact';

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
      id='mobileBar'
      class='dark:(bg-slate-800, text-pink-500) absolute top-0 min-w-full select-none bg-slate-100 p-3 text-2xl text-violet-800 transition-colors lg:hidden'>
      <button
        id='hamburgerMenu'
        type='button'
        onClick={(): void => {
          setIsDrawerOpen(true);
        }}
        title='Open Drawer'
        class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) mr-2 w-12 rounded-lg px-3 py-2 leading-4 transition-colors'>
        <Menu aria-label='Bars' strokeWidth='2.25' class='scale-125' />
      </button>
      <ThemeToggle />
    </nav>
  );
};

const SidePanel = ({
  isDrawerOpen,
  setIsDrawerOpen
}: DrawerControls): JSX.Element => {
  const [modalContent, setModalContent] = useState<JSX.Element>();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

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
          id='addProject'
          type='button'
          onClick={(): void => {
            setIsComponentVisible(true);
            setModalContent(
              <AddProject
                key='Add Project'
                setIsComponentVisible={setIsComponentVisible}
              />
            );
          }}
          class='hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) flex grow items-center gap-1.5 break-all rounded-lg bg-violet-800 p-3 font-medium leading-4 text-slate-50 transition-colors dark:bg-pink-600'>
          <Plus aria-label='Plus Sign' strokeWidth='2.25' class='scale-110' />
          Add Project
        </button>
        {isDrawerOpen ? (
          <button
            id='mobileCloseDrawer'
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

      <div id='projectList' class='mt-2 flex min-w-full flex-col gap-2'>
        <span>
          <button
            type='button'
            class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) flex min-w-full items-center break-all rounded-lg px-3 py-2 text-xl leading-4 text-slate-900 transition-colors dark:text-slate-50'>
            Default
          </button>
        </span>
      </div>
      <ModalWindow
        modalContent={modalContent}
        setIsComponentVisible={setIsComponentVisible}
        isComponentVisible={isComponentVisible}
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
