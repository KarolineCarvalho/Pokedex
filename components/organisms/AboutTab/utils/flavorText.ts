import { clearString } from "@utils/stringUtils";

import { PokemonSpecies } from "types/PokemonFetchTypes";

export const getFlavorText = (pokemon: PokemonSpecies) => {
  let filteredFlavor = pokemon.flavor_text_entries.filter(
    (flavor) => flavor.language.name === "en"
  );
  return clearString(filteredFlavor[0]["flavor_text"]);
};
