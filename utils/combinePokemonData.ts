import Pokemon from "models/Pokemon";
import PokemonType from "models/PokemonTypes";
import { PokemonBasicInfo, PokemonResults } from "models/PokemonFetchTypes";

const extractTypes = (pokemon: PokemonResults): PokemonType[] => {
  const newTypes: PokemonType[] = [pokemon.types[0].type.name];
  if (pokemon?.types[1]?.type?.name) newTypes.push(pokemon.types[1].type.name);
  return newTypes;
};

export const combinePokemonData = (
  pokemonBasicInfo: PokemonBasicInfo | undefined,
  pokemonData: PokemonResults[] | undefined
): Pokemon[] | undefined => {
  if (pokemonBasicInfo?.results && pokemonData)
    return pokemonData.map((pokemon, i: number) => ({
      ...pokemonBasicInfo.results[i],
      ...pokemon,
      sprite: pokemon.sprites.front_default,
      types: extractTypes(pokemon),
    }));
  return undefined;
};
