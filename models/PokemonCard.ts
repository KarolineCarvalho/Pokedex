import Pokemon from "./Pokemon";

export type Card = Pick<
  Pokemon,
  "id" | "name" | "types" | "sprite" | "abilities"
>;
