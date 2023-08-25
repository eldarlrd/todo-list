import { type JSX } from 'preact/jsx-runtime';
import { type StateUpdater, type Ref } from 'preact/hooks';
import { X } from 'lucide-preact';

interface ModalContent {
  windowContent: JSX.Element | undefined;
  setVisible: StateUpdater<boolean>;
  visible: boolean;
  refer: Ref<HTMLDivElement>;
}

export const Modal = ({
  windowContent,
  setVisible,
  visible,
  refer
}: ModalContent): JSX.Element => {
  return (
    <div
      id='overlay'
      class={
        visible
          ? 'dark:(bg-slate-900, bg-opacity-70) absolute inset-0 flex items-center justify-center bg-slate-50 bg-opacity-70 backdrop-blur-[1px] z-10 transition-opacity duration-200'
          : 'opacity-0 w-0 h-0'
      }>
      <div
        id='modalAddProject'
        class={
          visible
            ? 'dark:(bg-slate-600, shadow-slate-700) flex aspect-video w-80 flex-col rounded-lg bg-slate-300 shadow-sm shadow-slate-200 transition-all sm:w-96 md:w-[28rem] lg:w-[32rem] xl:w-[36rem] 2xl:w-[40rem]'
            : 'hidden'
        }
        ref={refer}>
        <div class='mx-4 my-2 flex justify-between text-xl font-semibold transition-all dark:text-pink-300 xl:text-2xl'>
          {windowContent?.key}
          <button
            id='closeModal'
            type='button'
            onClick={(): void => {
              setVisible(false);
            }}
            class='hover:(bg-slate-200, active:bg-slate-100, dark:(bg-slate-700, active:bg-slate-800)) rounded-lg px-1 leading-4 transition-colors xl:px-2'>
            <X
              aria-label='X'
              strokeWidth='2.5'
              class='scale-105 transition-transform xl:scale-125'
            />
          </button>
        </div>
        <div class='dark:(bg-slate-700, text-slate-50) mx-px mb-px grow rounded-b-lg bg-slate-200 px-4 py-2 text-slate-900'>
          {windowContent}
        </div>
      </div>
    </div>
  );
};
