import { User2 } from 'lucide-preact';
import { type JSX } from 'preact/jsx-runtime';

import { ModalWindow } from '@/components/modals/modalWindow.tsx';
import { UserModal } from '@/components/modals/userModal.tsx';
import { useVisible } from '@/hooks/useVisible.ts';

// TODO: Pass props into modal
export const UserAccount = (): JSX.Element => {
  const { refer, isVisible, setIsVisible } = useVisible(false);

  return (
    <div>
      <button
        type='button'
        title='User Account'
        id='user-auth'
        onClick={(): void => {
          setIsVisible(true);
        }}
        class='hover:(bg-slate-200, active:bg-slate-300, dark:(bg-slate-700, active:bg-slate-600)) lg:(w-14, px-4, py-3) xl:(w-16, px-5, py-4) w-12 rounded px-3 py-2 leading-4 transition-colors'>
        <User2
          aria-label='User'
          strokeWidth='2.25'
          class='scale-110 transition-transform lg:scale-125 xl:scale-150'
        />
      </button>

      <ModalWindow
        modalContent={
          <UserModal key='User Account' setIsVisible={setIsVisible} />
        }
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        refer={refer}
      />
    </div>
  );
};
