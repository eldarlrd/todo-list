import { type JSX } from 'preact/jsx-runtime';
import { Header } from '@/components/header.tsx';
import { Navbar } from '@/components/navbar.tsx';
import { List } from '@/components/list.tsx';
import { Footer } from '@/components/footer.tsx';

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Navbar />
      <List />
      <Footer />
    </>
  );
};

// Easter Egg
console.log(`"Give me six hours to chop down a tree and I will
spend the first four sharpening the axe." - Abraham Lincoln`);
