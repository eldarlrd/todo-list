import { type JSX } from 'preact/jsx-runtime';
import { Header } from '@/components/header.tsx';
import { Navbar } from '@/components/navbar.tsx';
import { List } from '@/components/list.tsx';
import { Footer } from '@/components/footer.tsx';

export const App = (): JSX.Element => {
  return (
    <div
      id='app'
      class='font-main flex min-h-screen flex-col justify-between bg-slate-50 accent-emerald-500 selection:bg-emerald-500 dark:bg-slate-900'>
      <Navbar />
      <Header />
      <List />
      <Footer />
    </div>
  );
};

// Easter Egg
console.log(`"Give me six hours to chop down a tree and I will
spend the first four sharpening the axe." - Abraham Lincoln`);
