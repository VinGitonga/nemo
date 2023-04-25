import "@/styles/globals.css";
import { Rubik } from "@next/font/google";
import { AppPropsWithLayout } from "@/types/Layout";
import Head from "next/head";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <main className={rubik.className}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <style>
          {`
          :root {
            --font-inconsolata: ${rubik.style.fontFamily}, 'Rubik';
          }
          `}
        </style>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
