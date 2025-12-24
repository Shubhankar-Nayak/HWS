import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
  isProgrammesHover: boolean;
  setIsProgrammesHover: (value: boolean) => void;
}

const Layout = ({ children, isProgrammesHover, setIsProgrammesHover }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isProgrammesHover={isProgrammesHover} setIsProgrammesHover={setIsProgrammesHover} />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
