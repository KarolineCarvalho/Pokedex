import { fetcher } from "@utils/fetchers";
import useSWR from "swr";

const useSinglePokemon = (props: string) => {
  const { data, error } = useSWR(`https://pokeapi.co/api/v2/${props}`, fetcher);

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useSinglePokemon;
