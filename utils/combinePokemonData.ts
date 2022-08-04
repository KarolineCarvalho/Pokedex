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
      name: pokemonBasicInfo.results[i].name,
      id: pokemon.id,
      abilities: pokemon.abilities,
      sprites: {
        front_default:
          pokemon?.sprites?.front_default || "/images/missingno.webp",
      },
      sprite: pokemon?.sprites?.front_default || "/images/missingno.webp",
      types: extractTypes(pokemon),
      moves: pokemon.moves.map((move) => ({ move: { name: move.move.name } })),
      url: pokemonBasicInfo.results[i].url,
    }));
  return undefined;
};

// if (pokemonBasicInfo?.results && pokemonData)
// return pokemonData.map((pokemon, i: number) => ({
//   name: pokemonBasicInfo.results[i].name,
//   id: pokemon.id,
//   abilities: pokemon.abilities,
//   sprites: {
//     front_default:
//       pokemon?.sprites?.front_default || "/images/missingno.webp",
//   },
//   sprite: pokemon?.sprites?.front_default || "/images/missingno.webp",
//   types: extractTypes(pokemon),
//   moves: pokemon.moves.map((move) => ({ move: { name: move.move.name } })),
//   url: pokemonBasicInfo.results[i].url,
// }));
