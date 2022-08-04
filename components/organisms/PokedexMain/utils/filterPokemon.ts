import Pokemon from "models/Pokemon";

export const filterPokemon = (
  search: string | string[] | undefined,
  pokemon:
    | Pick<Pokemon, "id" | "name" | "types" | "sprite" | "abilities">[]
    | undefined
):
  | Pick<Pokemon, "id" | "name" | "types" | "sprite" | "abilities">[]
  | undefined => {
  if (!pokemon) return undefined;
  if (!search) return pokemon;
  let searchString = (Array.isArray(search) ? search.join(" ") : search).trim();
  return pokemon.filter((pk) =>
    [pk.name, ...pk.types, ...pk.abilities.map((ab) => ab.ability.name)]
      .join(" ")
      .toLowerCase()
      .includes(searchString.toLowerCase())
  );
};
