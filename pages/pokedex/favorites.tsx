import type { NextPage } from "next";
import MainLayout from "@templates/MainLayout";
import Head from "next/head";
import PokedexHeader from "@organisms/PokedexHeader";
import SettingsMenu from "@organisms/SettingsMenu";
import Favorites from "@organisms/Favorites";

const Pokedex: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pokedex - Favorites</title>
      </Head>
      <MainLayout>
        <PokedexHeader />
        <Favorites />
        <SettingsMenu />
      </MainLayout>
    </div>
  );
};

export default Pokedex;
