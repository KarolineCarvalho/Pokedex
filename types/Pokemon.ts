import PokemonType from "./PokemonTypes";

type Pokemon = {
  id: string;
  name: string;
  types: PokemonType[];
  sprite: string;
};

export default Pokemon;
