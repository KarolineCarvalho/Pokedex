import Grid from "@molecules/Grid";
import type { NextPage } from "next";
import MainLayout from "@templates/MainLayout";
import PokeCard from "@molecules/PokeCard";
import Heading from "@atoms/Heading";
import styles from "../styles/Pokedex.module.scss";
import Head from "next/head";
import usePokemon from "hooks/usePokemon";
import Link from "next/link";
import PokedexHeader from "@organisms/PokedexHeader";

const Pokedex: NextPage = () => {
  const { pokemon, isLoading, isError } = usePokemon();

  return (
    <div>
      <Head>
        <title>Pokedex - List</title>
      </Head>
      <MainLayout>
        <PokedexHeader />
        <main>
          <section
            aria-label="pokemon list"
            className={styles["pokedexSection"]}
          >
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
      </MainLayout>
    </div>
  );
};

export default Pokedex;
