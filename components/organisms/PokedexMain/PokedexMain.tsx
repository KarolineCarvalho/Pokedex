import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import Link from "next/link";
import styles from "./PokedexMain.module.scss";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { filterPokemon } from "./utils/filterPokemon";
import usePokemon from "hooks/usePokemon";

type Props = {
  allPokemon: any[];
};

const PokedexMain = ({ allPokemon }: Props): JSX.Element => {
  const router = useRouter();
  const { search } = router.query;

  const { pokemon } = usePokemon(allPokemon);

  const pokemonFiltered = useMemo(
    () => filterPokemon(search, pokemon),
    [pokemon, search]
  );

  return (
    <main>
      <section aria-label="pokemon list" className={styles["pokedexSection"]}>
        <Heading>Pokedex</Heading>
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
