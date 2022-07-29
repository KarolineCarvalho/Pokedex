import PokemonType from "./PokemonTypes";

export type PokemonAbility = {
  ability: { name: string };
};

export type PokemonMove = {
  move: {
    name: string;
  };
};

type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  sprite: string;
  sprites: { front_default: string };
  url: string;
  abilities: PokemonAbility[];
  moves: PokemonMove[];
};

export default Pokemon;
