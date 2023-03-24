import { Html, Head, Main, NextScript } from "next/document";
import { Vazirmatn } from "next/font/google";

const vazirmatn = Vazirmatn();

export default function Document() {
  return (
    <Html lang="fa" dir="rtl">
      <Head />
      <body className={vazirmatn.className}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
