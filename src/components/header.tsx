import Logo from '@/assets/todoList.webp';

export const Header = () => {
  return (
    <header class='md:(flex-row, justify-start, gap-4, px-6, py-3) flex select-none flex-col items-center justify-center gap-2 bg-slate-100 px-4 py-5 text-3xl font-bold italic text-violet-800 xl:text-4xl'>
      <img
        class='xl:(h-28, w-28) h-24 w-24'
        alt='Pinned Todo List'
        src={Logo}
      />
      Todo List
    </header>
  );
};