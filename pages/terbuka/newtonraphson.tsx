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
import LoopInput from "../../components/loop_input";
import NewtonRaphson from "../../src/terbuka/newtonraphson";
import NRFunction from "../../components/calculations/newton_raphson";
import { getRandom } from "../../src/formula";

function calculate(iteration: number, firstGuess: number): NewtonRaphson[] {
  const arrData: NewtonRaphson[] = [];
  for (let i = 0; i < iteration; i++) {
    let data: NewtonRaphson;
    if (i == 0) {
      data = new NewtonRaphson(firstGuess);
    } else {
      data = new NewtonRaphson(arrData[i - 1].xr);
      data.calculate();
    }
    arrData.push(data);
  }
  return arrData;
}

const NewtonRaphsonPage: NextPage = () => {
  const [loop, setLoop] = useState<number>(0);
  const [data, setData] = useState<NewtonRaphson[]>([]);
  const [formErr, setFormErr] = useState<boolean>(true);
  const [guessNumber, setGuessNumber] = useState<number>(4);

  const handleClick = () => {
    if (!formErr) {
      setData([...calculate(loop, guessNumber)]);
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

  const getRandomHandler = () => {
    setGuessNumber(getRandom());
  };

  return (
    <>
      <Header title="Metode Newton-Raphson"></Header>
      <Navbar></Navbar>
      <main className="container">
        <section className="mb-10">
          <h1 className="text-center font-bold text-3xl my-20 mb-4">
            Metode Newton-Raphson
          </h1>
          <div className="flex justify-center mb-5">
            <div className="flex flex-col">
              <span>
                Rumus Newthon-Raphson: <NRFunction></NRFunction>
              </span>
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
              <THeadItem>xr</THeadItem>
              <THeadItem>Galat</THeadItem>
            </THead>
            <TBody>
              {data.map((v, index) => (
                <TBodyItem key={index}>
                  <td className="py-4 px-6 text-sm font-bold text-gray-900 whitespace-nowrap">
                    {index + 1}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {v.xr}
                  </td>
                  <td className="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap">
                    {index == 0 ? 0 : Math.abs(data[index - 1].xr - v.xr)}
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

export default NewtonRaphsonPage;
