import BackArrow from "@atoms/BackArrow";
import Grid from "@molecules/Grid";
import type { NextPage } from "next";
import MainLayout from "@templates/MainLayout";
import PokeCard from "@molecules/PokeCard";
import PokemonType from "types/PokemonTypes";
import Heading from "@atoms/Heading";
import ListIcon from "@atoms/ListIcon";
import styles from "../styles/Pokedex.module.scss";
import Head from "next/head";
import useFetch from "hooks/useFetch";

const Pokedex: NextPage = () => {
  const pokemons = [
    {
      id: "4",
      name: "Charmander",
      types: ["fire"] as PokemonType[],
      sprite: "images/charmander.png",
    },
    {
      id: "5",
      name: "Charmander",
      types: ["fire"] as PokemonType[],
      sprite: "images/charmander.png",
    },
    {
      id: "6",
      name: "Charmander",
      types: ["fire"] as PokemonType[],
      sprite: "images/charmander.png",
    },
  ];

  const { pokemon, isLoading, isError } = useFetch("pokemon/pikachu");
  console.log(pokemon);

  return (
    <div>
      <Head>
        <title>Pokedex - List</title>
      </Head>
      <MainLayout>
        <header className={styles.header}>
          <BackArrow />
          <div className={styles["header__listIcon"]}>
            <ListIcon />
          </div>
        </header>
        <main>
          <section
            aria-label="pokemon list"
            className={styles["pokedexSection"]}
          >
            <Heading>Pokedex</Heading>
            <Grid type="pokedex">
              {pokemons.map((pokemon) => (
                <PokeCard key={pokemon.id} pokemon={pokemon}></PokeCard>
              ))}
            </Grid>
          </section>
        </main>
      </MainLayout>
    </div>
  );
};

export default Pokedex;
