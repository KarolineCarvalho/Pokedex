import type { NextPage } from "next";
import MainLayout from "@templates/MainLayout";
import Head from "next/head";
import PokedexHeader from "@organisms/PokedexHeader";
import PokedexMain from "@organisms/PokedexMain";
import SettingsMenu from "@organisms/SettingsMenu";

const Pokedex: NextPage<{ allPokemon: any }> = () => {
  return (
    <div>
      <Head>
        <title>Pokedex - List</title>
      </Head>
      <MainLayout>
        <PokedexHeader />
        <PokedexMain />
        <SettingsMenu />
      </MainLayout>
    </div>
  );
};

export default Pokedex;
