import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";
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
  if (!pokeId)
    return (
      <div>
        <Head>
          <title>
            {pokemon ? captilizeFirstLetter(pokemon.name) : "Loading"}
          </title>
        </Head>
        Loading
      </div>
    );

  console.log(pokemon);
  return (
    <div className={styles.pokemonPage}>
      <Head>
        <title>
          {pokemon ? captilizeFirstLetter(pokemon.name) : "Loading"}
        </title>
      </Head>

      <PokemonView /* pokemonName={pokemon.name} */ />
      {/* <PokemonHeader /> */}
      <PokemonBackground />
      <PokemonDetails current={page} pokemonID={pokeId} />
    </div>
  );
};

export default PokemonPage;
