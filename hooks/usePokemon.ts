import useSWR from "swr";
import {
  PokemonBasicInfo,
  PokemonBasicResults,
  PokemonResults,
} from "models/PokemonFetchTypes";
import { fetcher, multiFetcher } from "@utils/fetchers";
import { combinePokemonData } from "@utils/combinePokemonData";
import Pokemon from "@models/Pokemon";
import { useState } from "react";

const usePokemon = (fallback: Pokemon[]) => {
  const [nPokemonLoaded, setNPokemonLoaded] = useState(25);
  const { data: pokemonBasicInfo, error } = useSWR<PokemonBasicInfo>(
    `https://pokeapi.co/api/v2/pokemon`,
    () =>
      fetcher(
        `https://pokeapi.co/api/v2/pokemon?limit=${nPokemonLoaded}&offset=0`
      ),
    {
      fallback: { "https://pokeapi.co/api/v2/pokemon": { results: fallback } },
      onSuccess: () => {
        console.log("foi ", nPokemonLoaded);
        if (nPokemonLoaded < 900) setNPokemonLoaded((cur) => cur + 25);
      },
    }
  );

  const urls = pokemonBasicInfo?.results.map(
    (pokemon: PokemonBasicResults) => pokemon.url
  );
  const { data: pokemonData, error: error2 } = useSWR<PokemonResults[]>(
    urls,
    multiFetcher,
    {
      fallback: { "https://pokeapi.co/api/v2/pokemon": fallback },
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  let pokemonFinalData = combinePokemonData(pokemonBasicInfo, pokemonData);

  return {
    pokemon: pokemonFinalData || fallback,
    isLoading: !error && !error2 && !pokemonFinalData,
    isError: error,
  };
};

export default usePokemon;
