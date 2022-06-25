import type { NextPage } from "next";
import Link from "next/link";
import Header from "../../components/header";
import Navbar from "../../components/navbar/navbar";

const MetodeTerbuka: NextPage = () => {
  return (
    <>
      <Header title="Metode Terbuka"></Header>
      <Navbar></Navbar>
      <main>
        <h1 className="text-3xl font-bold underline">Hello World</h1>
        <Link href="/terbuka" passHref>
          <a>asd</a>
        </Link>
      </main>
    </>
  );
};

export default MetodeTerbuka;
