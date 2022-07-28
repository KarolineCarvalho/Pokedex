import useSWR from "swr";

type Props = {};

const useFetch = (props: Props) => {
  async function fetchPokemon(url: string) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/${props}`,
    fetchPokemon
  );

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useFetch;
