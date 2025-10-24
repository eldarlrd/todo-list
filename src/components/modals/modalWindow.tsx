// eslint-disable-next-line import/named
import { type FocusTrap, createFocusTrap } from 'focus-trap';
import { X } from 'lucide-preact';
import { createContext, type RefObject } from 'preact';
import {
  type StateUpdater,
  useState,
  useEffect,
  type Dispatch
} from 'preact/hooks';
import { type JSX } from 'preact/jsx-runtime';

const IsModalVisible = createContext(false);

interface ModalControls {
  modalContent: JSX.Element | undefined;
  setIsVisible: Dispatch<StateUpdater<boolean>>;
  isVisible: boolean;
  refer: RefObject<HTMLDivElement>;
}

const ModalWindow = ({
  modalContent,
  setIsVisible,
  isVisible,
  refer
}: ModalControls): JSX.Element => {
  const [focusTrap, setFocusTrap] = useState<FocusTrap>();

  // Modal Focus Trap
  useEffect(() => {
    if (refer.current) setFocusTrap(createFocusTrap(refer.current));
  }, [refer]);

  useEffect(() => {
    if (isVisible) focusTrap?.activate();
    else focusTrap?.deactivate();
  }, [isVisible, focusTrap]);

  return (
    <div
      role='presentation'
      id='overlay'
      class={
        isVisible ?
          'fixed inset-0 z-30 flex items-center justify-center bg-slate-50/70 backdrop-blur-[1px] transition-opacity' +
          ' duration-200 dark:bg-slate-900/70'
        : 'h-0 w-0 opacity-0'
      }
      onKeyDown={(e: KeyboardEvent): void => {
        if (e.key === 'Escape') setIsVisible(false);
      }}>
      <div
        id='modal-window'
        ref={refer}
        class={
          isVisible ?
            'dark:(bg-slate-600, shadow-slate-700) flex w-80 flex-col rounded bg-slate-300 shadow-sm shadow-slate-200 transition-all sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem]'
          : 'hidden'
        }>
        <div class='mx-4 my-2 flex justify-between text-xl font-semibold text-violet-900 transition-all select-none xl:text-2xl dark:text-pink-300'>
          {modalContent?.key}
          <button
            type='button'
            id='close-modal'
            class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) rounded px-1 leading-4 transition-colors xl:px-2'
            onClick={(): void => {
              setIsVisible(false);
            }}>
            <X
              aria-label='X'
              strokeWidth='2.5'
              class='scale-105 transition-transform xl:scale-125'
            />
          </button>
        </div>

        <div
          id='modal-content'
          class='dark:(bg-slate-700, text-slate-50) mx-px mb-px grow rounded-b bg-slate-200 px-4 py-3 text-slate-900'>
          <IsModalVisible.Provider value={isVisible}>
            {modalContent}
          </IsModalVisible.Provider>
        </div>
      </div>
    </div>
  );
};

export { IsModalVisible, ModalWindow };
