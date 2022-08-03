import { fetcher } from "@utils/fetchers";
import useSWR from "swr";

const useSinglePokemon = (props: string, shouldFetch: boolean = true) => {
  const { data, error } = useSWR(
    shouldFetch ? `https://pokeapi.co/api/v2/${props}` : null,
    fetcher
  );

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSinglePokemon;
