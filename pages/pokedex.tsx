import type { NextPage } from "next";
import MainLayout from "@templates/MainLayout";
import Head from "next/head";
import PokedexHeader from "@organisms/PokedexHeader";
import PokedexMain from "@organisms/PokedexMain";

const Pokedex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pokedex - List</title>
      </Head>
      <MainLayout>
        <PokedexHeader />
        <PokedexMain />
      </MainLayout>
    </div>
  );
};

export default Pokedex;
