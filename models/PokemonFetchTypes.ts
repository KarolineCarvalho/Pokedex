import PokemonType from "models/PokemonTypes";
import { PokemonAbility, PokemonMove } from "./Pokemon";

export type PokemonBasicResults = { name: string; url: string };
export type PokemonBasicInfo = { results: PokemonBasicResults[] };
export type PokemonResults = {
  name: string;
  types: { type: { name: PokemonType } }[];
  sprites: { front_default: string };
  id: number;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
};

export type PokemonSpecies = {
  flavor_text_entries: { language: { name: string }; flavor_text: string }[];
};
