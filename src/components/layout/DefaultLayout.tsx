import { Vazirmatn } from "next/font/google";
import { Fragment } from "react";
import type { ReactNode, FC } from "react";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Head from 'next/head'

const vazirmatn = Vazirmatn({ subsets: ["latin"], variable: "--vazirmatn" });

export interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
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
      <Navbar />
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default DefaultLayout;
