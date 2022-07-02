import type { NextPage } from "next";
import { routeTable } from "../../src/route";
import Card from "../../components/card";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Navbar from "../../components/navbar/navbar";

const MetodeTerbuka: NextPage = () => {
  return (
    <>
      <Header title="Metode Terbuka"></Header>
      <Navbar></Navbar>
      <main>
        <section className="container">
          <h1 className="text-center font-bold text-3xl m-20 mb-10">
            Metode Terbuka
          </h1>
          <div className="flex flex-row">
            <div className="flex flex-wrap justify-center">
              {routeTable[1].child.map((item, index) => (
                <Card item={item} key={index}></Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default MetodeTerbuka;
