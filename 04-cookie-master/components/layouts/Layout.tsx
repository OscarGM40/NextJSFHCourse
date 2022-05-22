import Head from 'next/head';
import { Navbar } from '../ui';

interface LayoutProps {
  children?: React.ReactNode;
}
export const Layout = ({ children }:LayoutProps) => {
  return (
    <>
      <Head>
        <title>Cookie Master</title>
      </Head>
      <nav>
        <Navbar />
        <main style={{ padding: '20px 50px' }}>{children}</main>
      </nav>
    </>
  );
};
