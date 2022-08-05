import { fetcher } from "@utils/fetchers";
import useSWR from "swr";

const useSinglePokemon = (
  props: string | number,
  shouldFetch: boolean = true
) => {
  const { data, error } = useSWR(
    shouldFetch ? `https://pokeapi.co/api/v2/${props}` : null,
    fetcher,
    { errorRetryCount: 3 }
  );

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSinglePokemon;
