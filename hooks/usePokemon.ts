import useSWR from "swr";
import Pokemon from "types/Pokemon";
import PokemonType from "types/PokemonTypes";

type PokemonBasicResults = { name: string; url: string };
type PokemonResults = {
  name: string;
  types: { type: { name: PokemonType } }[];
  sprites: { front_default: string };
  id: number;
};
type PokemonBasicInfo = { results: PokemonBasicResults[] };

async function fetcher(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function multiFetcher(...urls: string[]) {
  return Promise.all(urls.map((url) => fetcher(url)));
}

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

  let pokemonFinalData: Pokemon[] | undefined;
  if (pokemonBasicInfo?.results && pokemonData) {
    pokemonFinalData = pokemonData.map((pokemon: PokemonResults, i: number) => {
      const newTypes: PokemonType[] = [pokemon.types[0].type.name];
      if (pokemon?.types[1]?.type?.name)
        newTypes.push(pokemon?.types[1]?.type?.name);
      return {
        ...pokemonBasicInfo.results[i],
        ...pokemon,
        sprite: pokemon.sprites.front_default,
        types: newTypes,
      };
    });
  }

  return {
    pokemon: pokemonFinalData,
    isLoading: !error && !error2 && !pokemonFinalData,
    isError: error,
  };
};

export default usePokemon;
