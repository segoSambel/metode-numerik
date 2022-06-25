import type { NextPage } from "next";
import Header from "../../components/header";
import Navbar from "../../components/navbar/navbar";
import Table from "../../components/table/table";
import THead from "../../components/table/thead";
import THeadItem from "../../components/table/thead_item";

const RegulaFalsi: NextPage = () => {
  return (
    <>
      <Header title="Metode Numerik | Home"></Header>
      <Navbar></Navbar>
      <main>
        <Table width={6}>
          <THead>
            <THeadItem title="#"></THeadItem>
            <THeadItem title="a"></THeadItem>
          </THead>
        </Table>
      </main>
    </>
  );
};

export default RegulaFalsi;
