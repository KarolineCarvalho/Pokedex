import useSWR from "swr";
import { request, gql } from "graphql-request";
import { graphQLPKList, spriteparsedPKList } from "@models/PokemonFetchTypes";
import { compatiblePokemonList } from "@utils/adjustAPI";

type QueryResult = {
  pokemon_v2_pokemon: graphQLPKList[];
};

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

const usePokemon = ({ page = 0 }) => {
  const query = gql`
          {
            pokemon_v2_pokemon(limit: 900, offset: ${page * 20}) {
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
  const { data, error } = useSWR<spriteparsedPKList[]>(query, graphQLFetcher);

  const pokemon = compatiblePokemonList(data);

  return {
    pokemon,
    isLoading: !error && !data,
    isError: error,
  };
};

export default usePokemon;
