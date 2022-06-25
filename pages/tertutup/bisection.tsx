import { NextPage } from "next";
import { useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar/navbar";
import Table from "../../components/table/table";
import TBody from "../../components/table/tbody";
import TBodyItem from "../../components/table/tbody_item";
import THead from "../../components/table/thead";
import THeadItem from "../../components/table/thead_item";
import { setPrecision } from "../../src/formula";
import Bisection from "../../src/tertutup/bisection";
import Tombol from "../../components/tombol";

function calculate(iteration: number): Bisection[] {
  const arrData: Bisection[] = [];
  let a = 2.6;
  let b = 2.5;
  for (let index = 0; index < iteration; index++) {
    const data = new Bisection(a, b);
    if (data.fac < 0) {
      b = data.c;
    } else if (data.fac > 0) {
      a = data.c;
    } else {
      break;
    }
    arrData.push(data);
  }
  return arrData;
}

const BisectionPage: NextPage = () => {
  const [loop, setLoop] = useState<number>(0);
  const [data, setData] = useState<Bisection[]>([]);
  const [formErr, setFormErr] = useState(true);

  const handleClick = () => {
    if (!formErr) {
      setData([...calculate(loop)]);
    }
  };

  const validate = (value: any) => {
    const validator = new RegExp("^[0-9]+$");
    if (!validator.test(value)) {
      setFormErr(true);
      return;
    }
    setFormErr(false);
    setLoop(value);
  };

  return (
    <>
      <Header title="Metode Bisection"></Header>
      <Navbar></Navbar>
      <main className="container">
        <section className="mb-10">
          <h1 className="text-center font-bold text-3xl m-20 mb-10">
            Metode Bisection
          </h1>
          <div className="flex justify-center items-center">
            <div className="relative mx-2">
              <div className="absolute flex border border-transparent left-0 top-0 h-full w-10">
                <div className="flex items-center justify-center rounded-tl rounded-bl z-10 bg-gray-100 text-gray-600 text-lg h-full w-full">
                  {!formErr ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      color="green"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      color="red"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </div>
              </div>

              <input
                id="iterasi"
                name="iterasi"
                type="text"
                placeholder="Masukkan Jumlah Iterasi"
                onChange={(val) => validate(val.currentTarget.value)}
                className="text-sm relative w-full border rounded-md placeholder-gray-400 focus:border-indigo-400 focus:outline-none py-2 pr-2 pl-12"
              ></input>
            </div>

            <Tombol clickHandler={handleClick}></Tombol>
          </div>
        </section>
        <section className="px-4">
          <Table width={6}>
            <THead>
              <THeadItem>#</THeadItem>
              <THeadItem>a</THeadItem>
              <THeadItem>b</THeadItem>
              <THeadItem>c</THeadItem>
              <THeadItem>F(a)</THeadItem>
              <THeadItem>F(b)</THeadItem>
              <THeadItem>F(c)</THeadItem>
              <THeadItem>F(a).F(c)</THeadItem>
              <THeadItem>F(a).F(c)</THeadItem>
              <THeadItem>Galat</THeadItem>
            </THead>
            <TBody>
              {data.map((v, index) => (
                <TBodyItem key={index}>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.a)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.b)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.c)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.fa)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.fb)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.fc)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(v.fac, 11)}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fac < 0 ? "[a,c]" : "[c,b]"}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {setPrecision(
                      v.fac < 0 ? Math.abs(v.a - v.c) : Math.abs(v.c - v.b)
                    )}
                  </td>
                </TBodyItem>
              ))}
            </TBody>
          </Table>
        </section>
      </main>
    </>
  );
};

export default BisectionPage;
