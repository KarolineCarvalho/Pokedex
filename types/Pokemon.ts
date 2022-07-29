import PokemonType from "./PokemonTypes";

type PokemonAbility = {
  ability: { name: string };
};

type PokemonMove = {
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
