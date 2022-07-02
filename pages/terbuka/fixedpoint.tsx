import { NextPage } from "next";
import { useState } from "react";
import Header from "../../components/header";
import Navbar from "../../components/navbar/navbar";
import Table from "../../components/table/table";
import TBody from "../../components/table/tbody";
import TBodyItem from "../../components/table/tbody_item";
import THead from "../../components/table/thead";
import THeadItem from "../../components/table/thead_item";
import Tombol from "../../components/tombol";
import FungsiUtama from "../../components/calculations/fungsi_utama";
import LoopInput from "../../components/loop_input";
import FixedPoint, { Strategy1, Strategy2 } from "../../src/terbuka/fixedpoint";
import MathJax from "react-mathjax";
import RadioSelector from "../../components/radio_selectior";

// TODO: buat algoritma untuk penyusunan list
function calculate(
  iteration: number,
  firstGuess: number,
  method: number
): FixedPoint[] {
  const arrData: FixedPoint[] = [];

  let strategy;
  switch (method) {
    case 0:
      strategy = new Strategy1();
      break;
    case 1:
      strategy = new Strategy2();
      break;
    default:
      strategy = new Strategy1();
      break;
  }
  for (let i = 0; i < iteration; i++) {
    const data = new FixedPoint(strategy);
    if (i == 0) {
      data.xi = firstGuess;
    } else {
      data.xi = arrData[i - 1].xi;
      data.execute();
    }
    arrData.push(data);
  }

  return arrData;
}

function getRandom() {
  return Math.floor(Math.random() * 10) + 1;
}

const FixedPointPage: NextPage = () => {
  const [loop, setLoop] = useState<number>(0);
  const [data, setData] = useState<FixedPoint[]>([]);
  const [formErr, setFormErr] = useState(true);
  const [guessNumber, setGuessNumber] = useState<number>(4);
  const [method, setMethod] = useState<number>(1);

  const handleClick = () => {
    if (!formErr) {
      setData([...calculate(loop, guessNumber, method)]);
      return;
    }
    alert("Masukkan iterasi");
  };

  const getRandomHandler = () => {
    setGuessNumber(getRandom());
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

  const changeHandler = (value: number) => {
    setMethod(value);
  };

  return (
    <>
      <Header title="Metode Fixed Point"></Header>
      <Navbar></Navbar>
      <main>
        <section className="mb-10">
          <h1 className="text-center font-bold text-3xl my-20 mb-4">
            Metode Fixed Point
          </h1>
          <div className="flex justify-center mb-2">
            <div className="flex flex-col">
              <span>
                Fungsi Utama : <FungsiUtama></FungsiUtama>
              </span>
              <MathJax.Provider>
                <span>
                  Setelah diubah ke bentuk{" "}
                  <MathJax.Node formula="x=g(x)" inline></MathJax.Node>
                </span>
                <RadioSelector
                  changeHandler={changeHandler}
                  value={0}
                  checked={method == 0 ? true : false}
                >
                  <MathJax.Node formula="x=x^{3}-x^{2}+1" inline></MathJax.Node>
                </RadioSelector>
                <RadioSelector
                  changeHandler={changeHandler}
                  value={1}
                  checked={method == 1 ? true : false}
                >
                  <MathJax.Node formula="x=g(x)" inline></MathJax.Node>
                </RadioSelector>
              </MathJax.Provider>
              <div className="my-2">
                <h3 className="inline mr-3">Tebakan Awal : {guessNumber}</h3>
                <Tombol
                  clickHandler={getRandomHandler}
                  text="Ubah Tebakan Awal"
                ></Tombol>
              </div>
              <div className="flex">
                <LoopInput
                  formErr={formErr}
                  validateHandler={validate}
                ></LoopInput>
                <Tombol
                  clickHandler={handleClick}
                  text="Hitung Sekarang!"
                ></Tombol>
              </div>
            </div>
          </div>
        </section>
        <section className="px-4 pb-10">
          <Table>
            <THead>
              <THeadItem>#</THeadItem>
              <THeadItem>xi</THeadItem>
              <THeadItem>Galat</THeadItem>
            </THead>
            <TBody>
              {data.map((v, index) => (
                <TBodyItem key={index}>
                  <td className="py-4 px-6 text-sm text-gray-900 whitespace-nowrap font-bold">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.xi}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {index == 0 ? 0 : Math.abs(data[index - 1].xi - v.xi)}
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

export default FixedPointPage;
