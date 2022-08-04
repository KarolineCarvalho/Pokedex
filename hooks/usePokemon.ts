import useSWR from "swr";
import { request, gql } from "graphql-request";
import { graphQLPKList, spriteparsedPKList } from "@models/PokemonFetchTypes";

type QueryResult = {
  pokemon_v2_pokemon: graphQLPKList[];
};

const query = gql`
  {
    pokemon_v2_pokemon(limit: 20) {
      name
      id
      pokemon_v2_pokemonsprites {
        sprites
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          pokemon_v2_typenames(
            where: { pokemon_v2_language: { name: { _eq: "en" } } }
          ) {
            name
          }
        }
      }
      pokemon_v2_pokemonabilities(where: { pokemon_v2_ability: {} }) {
        pokemon_v2_ability {
          pokemon_v2_abilitynames(
            where: { pokemon_v2_language: { name: { _eq: "en" } } }
          ) {
            name
          }
        }
      }
    }
  }
`;

const graphQLFetcher = async (query: string) => {
  const data = await request("https://beta.pokeapi.co/graphql/v1beta", query);
  const sprites = data.pokemon_v2_pokemon.map(
    (result: { pokemon_v2_pokemonsprites: { sprites: string }[] }) =>
      result.pokemon_v2_pokemonsprites[0].sprites.replace('\\"', '"')
  );
  const spritesParsed = await Promise.all(
    sprites.map((result: string) => JSON.parse(result))
  );
  const parsedData = data.pokemon_v2_pokemon.map(
    (result: graphQLPKList, i: number) => ({
      ...result,
      pokemon_v2_pokemonsprites: [{ sprites: spritesParsed[i] }],
    })
  );
  return parsedData;
};

const usePokemon = () => {
  const { data, error } = useSWR<spriteparsedPKList[]>(query, graphQLFetcher);
  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePokemon;
