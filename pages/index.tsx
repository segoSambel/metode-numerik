import type { NextPage } from "next";
import Link from "next/link";
import Header from "../components/header";
import Navbar from "../components/navbar/navbar";
import { routeTable } from "../src/route";
import Footer from "../components/footer";

// Index of Home Page
const Home: NextPage = () => {
    return (
        <>
            <Header title="Metode Numerik | Home"></Header>
            <Navbar></Navbar>
            <main>
                <section className="container">
                    <h1 className="text-center font-bold text-3xl m-20 mb-10">
                        Aplikasi Penghitung SPNL
                    </h1>
                    <div className="flex flex-row">
                        <div className="flex flex-wrap justify-center">
                            {routeTable.map((item, index) => (
                                <Link href={item.href} passHref key={index}>
                                    <button className="block box-border text-center border-2 mb-2 rounded-md w-1/4 p-5 m-7 hover:bg-gray-50">
                                        <h1 className="font-bold text-xl mb-3">
                                            {item.name}
                                        </h1>
                                        <p>{item.definition}</p>
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Home;
