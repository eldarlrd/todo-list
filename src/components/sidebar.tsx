import { type FocusTrap, createFocusTrap } from 'focus-trap';
import { Menu, Plus, X } from 'lucide-preact';
import { type StateUpdater, useState, useEffect, useRef } from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

import { ThemeToggle } from '@/components/controls/themeToggle.tsx';
import { UserSignIn } from '@/components/controls/userSignIn.tsx';
import { ProjectList } from '@/components/lists/projectList.tsx';
import { AddProject } from '@/components/modals/addProject.tsx';
import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { useVisible } from '@/hooks/useVisible.ts';

interface DrawerControls {
  isDrawerOpen?: boolean;
  setIsDrawerOpen: StateUpdater<boolean>;
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
      class='dark:(bg-slate-800, text-pink-500) absolute top-0 flex min-w-full select-none justify-between gap-2 bg-slate-100 p-3 text-2xl text-violet-800 transition-colors lg:hidden'>
      <span class='flex gap-2'>
        <button
          type='button'
          title='Open Drawer'
          id='hamburger-menu'
          class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) w-12 rounded px-3 py-2 leading-4 transition-colors'
          onClick={(): void => {
            setIsDrawerOpen(true);
          }}>
          <Menu aria-label='Bars' strokeWidth='2.25' class='scale-125' />
        </button>
        <ThemeToggle identifier='mobile-theme-toggle' />
      </span>
      <UserSignIn />
    </nav>
  );
};

const SidePanel = ({
  isDrawerOpen,
  setIsDrawerOpen
}: DrawerControls): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);
  const [focusTrap, setFocusTrap] = useState<FocusTrap>();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    navRef.current ? setFocusTrap(createFocusTrap(navRef.current)) : null;
  }, [navRef]);

  useEffect(() => {
    isDrawerOpen ? focusTrap?.activate() : focusTrap?.deactivate();
  }, [isDrawerOpen, focusTrap]);

  return (
    <nav
      id='sidebar'
      ref={navRef}
      class={`${
        isDrawerOpen
          ? 'lg:(relative, min-w-0) fixed min-h-full w-full transition-all duration-500'
          : 'lg:(ml-0, transition-all) -ml-72'
      } dark:(bg-slate-700, text-pink-400) lg:(flex, pb-0) inset-0 z-10 w-72 select-none flex-col items-start bg-slate-200 py-1.5 text-violet-900 xl:w-80 2xl:w-96`}>
      <div class='after:(border-b, border-slate-300, transition-colors, dark:border-slate-600) mb-2 flex min-w-full flex-col gap-1.5 px-3 text-2xl'>
        <span class='flex gap-2'>
          <button
            type='button'
            id='add-project'
            class='hover:(bg-violet-700, active:bg-violet-600, dark:(bg-pink-700, active:bg-pink-800)) flex grow items-center gap-1.5 break-all rounded bg-violet-800 p-3 font-medium leading-4 text-slate-50 transition-colors dark:bg-pink-600'
            onClick={(): void => {
              setIsVisible(true);
            }}>
            <Plus aria-label='Plus Sign' strokeWidth='2.25' class='scale-110' />
            Add Project
          </button>

          {isDrawerOpen ? (
            <button
              type='button'
              title='Close Drawer'
              id='mobile-close-drawer'
              class='hover:(bg-slate-100, active:bg-slate-50, dark:(bg-slate-800, active:bg-slate-900)) w-12 rounded p-3 leading-4 transition-colors lg:hidden'
              onClick={(): void => {
                setIsDrawerOpen(false);
              }}>
              <X aria-label='X' strokeWidth='2.25' class='scale-110' />
            </button>
          ) : null}
        </span>
      </div>

      <ProjectList />

      <ModalWindow
        modalContent={
          <AddProject key='Add Project' setIsVisible={setIsVisible} />
        }
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </nav>
  );
};

export const Sidebar = (): JSX.Element => {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
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
