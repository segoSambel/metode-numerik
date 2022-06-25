import Head from "next/head";
import { MethodChild } from "../src/route";

function Header({ title }: any) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Aplikasi penghitung SPNL untuk project akhir mata kuliah Metode Numerik"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}

export default Header;
