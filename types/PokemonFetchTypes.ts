import PokemonType from "types/PokemonTypes";

export type PokemonBasicResults = { name: string; url: string };
export type PokemonBasicInfo = { results: PokemonBasicResults[] };
export type PokemonResults = {
  name: string;
  types: { type: { name: PokemonType } }[];
  sprites: { front_default: string };
  id: number;
};
