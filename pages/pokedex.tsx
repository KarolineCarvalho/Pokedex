import type { NextPage } from "next";
import MainLayout from "@templates/MainLayout";
import Head from "next/head";
import PokedexHeader from "@organisms/PokedexHeader";
import PokedexMain from "@organisms/PokedexMain";
import SettingsMenu from "@organisms/SettingsMenu";
import { combinePokemonData } from "@utils/combinePokemonData";
import { multiFetcher } from "@utils/fetchers";

const Pokedex: NextPage<{ allPokemon: any }> = ({ allPokemon }) => {
  return (
    <div>
      <Head>
        <title>Pokedex - List</title>
      </Head>
      <MainLayout>
        <PokedexHeader />
        <PokedexMain allPokemon={allPokemon} />
        <SettingsMenu />
      </MainLayout>
    </div>
  );
};

export default Pokedex;

export async function getStaticProps() {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0"
  );
  const pokemonList = await res.json();
  const urls = pokemonList.results.map((pokemon: any) => pokemon.url);
  const pokemonDetails = await multiFetcher(...urls);

  const allPokemon = combinePokemonData(pokemonList, pokemonDetails);

  return {
    props: {
      allPokemon,
    },
    revalidate: 36000, // In seconds
  };
}
