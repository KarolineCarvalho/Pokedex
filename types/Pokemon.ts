import PokemonType from "./PokemonTypes";

type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  sprite: string;
  sprites: { front_default: string };
  url: string;
};

export default Pokemon;
