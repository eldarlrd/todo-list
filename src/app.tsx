import { Header } from '@/components/header.tsx';
import { Navbar } from '@/components/navbar.tsx';
import { List } from '@/components/list.tsx';
import { Footer } from '@/components/footer.tsx';

export const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <List />
      <Footer />
    </>
  );
};
