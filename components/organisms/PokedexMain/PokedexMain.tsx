import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import usePokemon from "hooks/usePokemon";
import Link from "next/link";
import styles from "./PokedexMain.module.scss";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { filterPokemon } from "./utils/filterPokemon";
import SkeletonBox from "@atoms/SkeletonBox";

const PokedexMain = () => {
  const router = useRouter();
  const { search } = router.query;
  const { pokemon, isLoading, isError } = usePokemon();

  const pokemonFiltered = useMemo(
    () => filterPokemon(search, pokemon),
    [pokemon, search]
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
          {!isLoading &&
            !isError &&
            pokemonFiltered &&
            pokemonFiltered.map((singlePokemon) => (
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
