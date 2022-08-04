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

export type graphQLPKList = {
  name: string;
  id: number;
  pokemon_v2_pokemonsprites: [
    {
      sprites: string;
    }
  ];
  pokemon_v2_pokemontypes: [
    {
      pokemon_v2_type: {
        pokemon_v2_typenames: [
          {
            name: PokemonType;
          }
        ];
      };
    },
    {
      pokemon_v2_type: {
        pokemon_v2_typenames: [
          {
            name: string;
          }
        ];
      };
    }
  ];
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      pokemon_v2_abilitynames: [
        {
          name: string;
        }
      ];
    };
  }[];
};

export type spriteparsedPKList = {
  name: string;
  id: number;
  pokemon_v2_pokemonsprites: [
    {
      sprites: { front_default: string };
    }
  ];
  pokemon_v2_pokemontypes: [
    {
      pokemon_v2_type: {
        pokemon_v2_typenames: [
          {
            name: PokemonType;
          }
        ];
      };
    },
    {
      pokemon_v2_type: {
        pokemon_v2_typenames: [
          {
            name: PokemonType;
          }
        ];
      };
    }
  ];
  pokemon_v2_pokemonabilities: {
    pokemon_v2_ability: {
      pokemon_v2_abilitynames: [
        {
          name: string;
        }
      ];
    };
  }[];
};
