import useSWR from "swr";
import {
  PokemonBasicInfo,
  PokemonBasicResults,
  PokemonResults,
} from "types/PokemonFetchTypes";
import { fetcher, multiFetcher } from "@utils/fetchers";
import { combinePokemonData } from "@utils/combinePokemonData";

const usePokemon = () => {
  const { data: pokemonBasicInfo, error } = useSWR<PokemonBasicInfo>(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`,
    fetcher
  );

  const urls = pokemonBasicInfo?.results.map(
    (pokemon: PokemonBasicResults) => pokemon.url
  );
  const { data: pokemonData, error: error2 } = useSWR<PokemonResults[]>(
    urls,
    multiFetcher
  );

  let pokemonFinalData = combinePokemonData(pokemonBasicInfo, pokemonData);

  return {
    pokemon: pokemonFinalData,
    isLoading: !error && !error2 && !pokemonFinalData,
    isError: error,
  };
};

export default usePokemon;
