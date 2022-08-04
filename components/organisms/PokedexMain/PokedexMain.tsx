import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import Link from "next/link";
import styles from "./PokedexMain.module.scss";
import { useRouter } from "next/router";
import { filterPokemon } from "./utils/filterPokemon";
import usePokemon from "hooks/usePokemon";
import Pokemon from "@models/Pokemon";
import { useMemo } from "react";
import SkeletonBox from "@atoms/SkeletonBox";

type Card = Pick<Pokemon, "id" | "name" | "types" | "sprite" | "abilities">;

const PokedexMain = (): JSX.Element => {
  const router = useRouter();
  const { search } = router.query;

  const { pokemon, isLoading } = usePokemon({ page: 0 });

  const pokemonCompatible = pokemon?.map((pk) => {
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

  const pokemonFiltered = useMemo(
    () => filterPokemon(search, pokemonCompatible),
    [pokemonCompatible, search]
  );

  return (
    <main>
      <section aria-label="pokemon list" className={styles["pokedexSection"]}>
        <Heading>Pokedex</Heading>
        {isLoading && (
          <Grid type="pokedex">
            {isLoading &&
              new Array(6).fill("").map((_, i) => <SkeletonBox key={i} />)}
          </Grid>
        )}
        <Grid type="pokedex">
          {pokemonFiltered &&
            pokemonFiltered.slice(0, 25).map((singlePokemon) => (
              <Link
                href={`/pokemon/${singlePokemon.id}`}
                key={singlePokemon.id}
              >
                <a>
                  <PokeCard pokemon={singlePokemon}></PokeCard>
                </a>
              </Link>
            ))}
        </Grid>
      </section>
    </main>
  );
};

export default PokedexMain;
