import { Card } from "@models/PokemonCard";
import { spriteparsedPKList } from "@models/PokemonFetchTypes";

export const compatiblePokemonList = (
  pokemon: spriteparsedPKList[] | undefined
) =>
  pokemon?.map((pk) => {
    let types = [
      pk.pokemon_v2_pokemontypes[0].pokemon_v2_type.pokemon_v2_typenames[0]
        .name,
    ];
    if (
      pk.pokemon_v2_pokemontypes[1]?.pokemon_v2_type?.pokemon_v2_typenames[0]
        ?.name
    )
      types.push(
        pk.pokemon_v2_pokemontypes[1].pokemon_v2_type.pokemon_v2_typenames[0]
          .name
      );
    let newpk: Card = {
      id: pk.id,
      name: pk.name,
      sprite: pk.pokemon_v2_pokemonsprites[0].sprites.front_default,
      types: types,
      abilities: pk.pokemon_v2_pokemonabilities.map((ability) => ({
        ability: {
          name: ability.pokemon_v2_ability.pokemon_v2_abilitynames[0].name,
        },
      })),
    };
    return newpk;
  });
