import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import usePokemon from "hooks/usePokemon";
import Link from "next/link";
import styles from "./PokedexMain.module.scss";

const PokedexMain = () => {
  const { pokemon, isLoading, isError } = usePokemon();

  return (
    <main>
      <section aria-label="pokemon list" className={styles["pokedexSection"]}>
        <Heading>Pokedex</Heading>
        <Grid type="pokedex">
          {!isLoading &&
            !isError &&
            pokemon &&
            pokemon.map((singlePokemon) => (
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
