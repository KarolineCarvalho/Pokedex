import Pokemon from "models/Pokemon";

export const filterPokemon = (
  search: string | string[] | undefined,
  pokemon: Pokemon[] | undefined
): Pokemon[] | undefined => {
  if (!pokemon) return undefined;
  if (!search) return pokemon;
  let searchString = (Array.isArray(search) ? search.join(" ") : search).trim();
  return pokemon.filter((pk) =>
    [
      pk.name,
      pk.types,
      pk.abilities.map((ab) => ab.ability.name),
      pk.moves.map((mv) => mv.move.name),
    ]
      .join(" ")
      .includes(searchString)
  );
};
