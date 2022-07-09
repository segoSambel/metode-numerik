import { NextPage } from "next";
import { useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar/navbar";
import Table from "../../components/table/table";
import TBody from "../../components/table/tbody";
import TBodyItem from "../../components/table/tbody_item";
import THead from "../../components/table/thead";
import THeadItem from "../../components/table/thead_item";
import Bisection from "../../src/tertutup/bisection";
import Tombol from "../../components/tombol";
import FungsiUtama from "../../components/calculations/fungsi_utama";
import LoopInput from "../../components/loop_input";
import { setPrecision } from "../../src/formula";

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
      <main>
        <section className="mb-10">
          <h1 className="text-center font-bold text-3xl my-20 mb-4">
            Metode Bisection
          </h1>
          <div className="items-center mb-5 flex flex-col">
            <div>
              <p className="mr-3 inline">Fungsi yang akan dihitung:</p>
              <FungsiUtama></FungsiUtama>
            </div>
            <div>Nilai awal : a=2.6 dan b=2.5</div>
          </div>
          <div className="flex justify-center items-center">
            <LoopInput formErr={formErr} validateHandler={validate}></LoopInput>
            <Tombol clickHandler={handleClick} text="Hitung Sekarang!"></Tombol>
          </div>
        </section>
        <section className="px-4 pb-10">
          <Table>
            <THead>
              <THeadItem>#</THeadItem>
              <THeadItem>a</THeadItem>
              <THeadItem>b</THeadItem>
              <THeadItem>c</THeadItem>
              <THeadItem>F(a)</THeadItem>
              <THeadItem>F(b)</THeadItem>
              <THeadItem>F(c)</THeadItem>
              <THeadItem>F(a).F(c)</THeadItem>
              <THeadItem>Selang</THeadItem>
              <THeadItem>Galat</THeadItem>
            </THead>
            <TBody>
              {data.map((v, index) => (
                <TBodyItem key={index}>
                  <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap font-bold">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.a}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.b}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.c}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fa}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fb}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fc}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fac}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fac < 0 ? "[a,c]" : "[c,b]"}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.fac < 0
                      ? setPrecision(Math.abs(v.a - v.c))
                      : setPrecision(Math.abs(v.c - v.b))}
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
