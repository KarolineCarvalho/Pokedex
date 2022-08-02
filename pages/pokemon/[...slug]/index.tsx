import PokemonBackground from "@molecules/PokemonBackground";
import PokemonDetails from "@organisms/PokemonDetails";
import PokemonView from "@organisms/PokemonView";
import useSinglePokemon from "hooks/useSinglePokemon";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import styles from "styles/Pokemon.module.scss";
import { captilizeFirstLetter } from "@utils/stringUtils";

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

  const { pokemon, isLoading, isError } = useSinglePokemon(`pokemon/${pokeId}`);
  const {
    pokemon: pokemonSpecies,
    isLoading: loadingSpecies,
    isError: errorSpecies,
  } = useSinglePokemon(`pokemon-species/${pokeId}`);
  if (!pokeId) return <div>Loading...</div>;
  if (!pokemon) return <div>Loading...</div>;
  const pokeTypes = pokemon.types.map((type: any) => {
    return type.type.name;
  });
  const pokeImg = pokemon.sprites.other["official-artwork"]["front_default"];

  return (
    <div className={styles.pokemonPage}>
      <Head>
        <title>
          {pokemon
            ? captilizeFirstLetter(pokemon.name) + "-" + { pokeId }
            : "Loading"}
        </title>
      </Head>
      <PokemonView
        pokemonName={pokemon.name}
        pokemonId={pokemon.id}
        pokemonTypes={pokeTypes}
        pokemonImg={pokeImg}
        pokemonSpecies={pokemonSpecies}
      />
      <PokemonBackground pokemonType={pokeTypes[0]} />
      <PokemonDetails current={page} pokemonID={pokeId} />
    </div>
  );
};

export default PokemonPage;
