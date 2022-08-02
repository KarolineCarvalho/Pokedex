import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";
import PokemonDetails from "@organisms/PokemonDetails";
import PokemonView from "@organisms/PokemonView";
import useSinglePokemon from "hooks/useSinglePokemon";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const getName = (queryResult: string | string[] | undefined) => {
  let pokeId;
  if (!queryResult) return { pokeId, type: "undefined" };
  pokeId = Array.isArray(queryResult) ? queryResult[0] : queryResult;
  const isNumber = (id: string) => /\d+/.test(id);
  if (isNumber(pokeId)) return { pokeId, type: "number" };
  return { pokeId, type: "name" };
};

const pages = ["about", "moves", "evolution", "basestats"] as const;
type PageType = typeof pages[number];
const isPage = (x: any): x is PageType => pages.includes(x);

const getPage = (queryResult: string | string[] | undefined): PageType => {
  if (!queryResult || queryResult.length < 2) return "about";
  return isPage(queryResult[1]) ? queryResult[1] : "about";
};

const PokemonPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const { pokeId, type } = getName(slug);
  const page = getPage(slug);

  if (!pokeId) return <div>Loading</div>;
  const { pokemon, loading, error } = useSinglePokemon(`pokemon/${pokeId}`);
  const { pokemonSpecies, loadingSpecies, errorSpecies } = useSinglePokemon(
    `pokemon-species/${pokeId}`
  );
  if (loadingSpecies) return <div>carregando...</div>;
  /* if (pokemonSpecies) console.log(pokemonSpecies); */
  if (loading) return <div>carregando...</div>;
  if (pokemon) {
    const pokeTypes = pokemon.types.map((type) => {
      return type.type.name;
    });
    const pokeImg = pokemon.sprites.other["official-artwork"]["front_default"];
    /* console.log(pokemon); */
    return (
      <div>
        <Head>
          <title>
            {pokemon.name} - {pokeId}
          </title>
        </Head>

        <PokemonView
          pokemonName={pokemon.name}
          pokemonId={pokemon.id}
          pokemonTypes={pokeTypes}
          pokemonImg={pokeImg}
        />

        <PokemonDetails current={page} pokemonID={pokeId} />
      </div>
    );
  }
};

export default PokemonPage;
