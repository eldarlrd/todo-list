import { type JSX } from 'preact/jsx-runtime';

import { Footer } from '@/components/banners/footer.tsx';
import { Header } from '@/components/banners/header.tsx';
import { Sidebar } from '@/components/controls/sidebar.tsx';
import { TodoList } from '@/components/lists/todoList.tsx';

export const App = (): JSX.Element => {
  return (
    <div
      id='app'
      class='font-main dark:(bg-slate-900, accent-sky-600, selection:bg-sky-600) flex min-h-[100svh] flex-col justify-between bg-slate-50 accent-emerald-400 selection:bg-emerald-400'>
      <Header />
      <main class='flex max-h-screen grow'>
        <Sidebar />
        <TodoList />
      </main>
      <Footer />
    </div>
  );
};

// Easter Egg
console.log(`"Give me six hours to chop down a tree and I will
spend the first four sharpening the axe." - Abraham Lincoln`);
