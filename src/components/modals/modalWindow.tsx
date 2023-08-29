import { createContext } from 'preact';
import { type JSX } from 'preact/jsx-runtime';
import { type StateUpdater, type Ref } from 'preact/hooks';
import { X } from 'lucide-preact';

export const IsModalVisible = createContext(false);

interface ModalControls {
  modalContent: JSX.Element | undefined;
  setIsComponentVisible: StateUpdater<boolean>;
  isComponentVisible: boolean;
  refer: Ref<HTMLDivElement>;
}

export const ModalWindow = ({
  modalContent,
  setIsComponentVisible,
  isComponentVisible,
  refer
}: ModalControls): JSX.Element => {
  return (
    <div
      id='overlay'
      class={
        isComponentVisible
          ? 'dark:(bg-slate-900, bg-opacity-70) absolute inset-0 z-10 flex items-center justify-center bg-slate-50 bg-opacity-70 backdrop-blur-[1px] transition-opacity duration-200'
          : 'h-0 w-0 opacity-0'
      }>
      <div
        id='modal-window'
        class={
          isComponentVisible
            ? 'dark:(bg-slate-600, shadow-slate-700) flex aspect-video w-80 flex-col rounded-lg bg-slate-300 shadow-sm shadow-slate-200 transition-all sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem]'
            : 'hidden'
        }
        ref={refer}>
        <div class='mx-4 my-2 flex justify-between text-xl font-semibold transition-all dark:text-pink-300 xl:text-2xl'>
          {modalContent?.key}
          <button
            id='close-modal'
            type='button'
            onClick={(): void => {
              setIsComponentVisible(false);
            }}
            class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) rounded-lg px-1 leading-4 transition-colors xl:px-2'>
            <X
              aria-label='X'
              strokeWidth='2.5'
              class='scale-105 transition-transform xl:scale-125'
            />
          </button>
        </div>
        <div
          id='modal-content'
          class='dark:(bg-slate-700, text-slate-50) mx-px mb-px grow rounded-b-lg bg-slate-200 px-4 py-3 text-slate-900'>
          <IsModalVisible.Provider value={isComponentVisible}>
            {modalContent}
          </IsModalVisible.Provider>
        </div>
      </div>
    </div>
  );
};
