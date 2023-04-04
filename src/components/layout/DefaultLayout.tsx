import { Vazirmatn } from 'next/font/google';
import { Fragment } from 'react';
import type { ReactNode, FC } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/header/Header';
import Navbar from '@/components/layout/navbar/Navbar';
import Footer from '@/components/layout/footer/Footer';
import Sidebar from '@/components/layout/sidebar/Sidebar';

const vazirmatn = Vazirmatn({ subsets: ['latin'], variable: '--vazirmatn' });

export interface DefaultLayoutProps {
  children: ReactNode;
  header?: boolean;
  navbar?: boolean;
  footer?: boolean;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({
  children,
  footer,
  navbar,
  header,
}) => {
  return (
    <Fragment>
      <Head>
        <title>خدمات طراحی فرانت اند وبسایت</title>
      </Head>
      <style jsx global>{`
        html {
          font-family: ${vazirmatn.style.fontFamily};
        }
      `}</style>
      {navbar && (
        <Fragment>
          <Navbar />
          <Sidebar />
        </Fragment>
      )}
      {header && <Header />}
      <main className='min-h-screen'>{children}</main>
      {footer && <Footer />}
    </Fragment>
  );
};

export default DefaultLayout;
