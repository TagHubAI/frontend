import type { ReactNode } from 'react';
import Navbar from './Navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer></footer>
    </>
  );
}
