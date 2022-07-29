import Grid from "@molecules/Grid";
import Heading from "@atoms/Heading";
import MenuCard from "@molecules/MenuCard";
import SearchBar from "@molecules/SearchBar";
import MainLayout from "@templates/MainLayout";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex - Home</title>
        <meta name="description" content="Pokedex app using PokeApi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <MainLayout>
          <section aria-label="Search bar" className={styles.searchSection}>
            <Heading>What Pokemon are you looking for?</Heading>
            <SearchBar />
          </section>
          <section aria-label="Navigation">
            <nav>
              <Grid type="home">
                <Link href="/pokedex">
                  <a>
                    <MenuCard color="green">Pokedex</MenuCard>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <MenuCard color="red">Moves</MenuCard>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <MenuCard color="blue">Abilities</MenuCard>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <MenuCard color="yellow">Items</MenuCard>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <MenuCard color="purple">Locations</MenuCard>
                  </a>
                </Link>
                <Link href="/">
                  <a>
                    <MenuCard color="brown">Type Charts</MenuCard>
                  </a>
                </Link>
              </Grid>
            </nav>
          </section>
        </MainLayout>
      </main>
    </div>
  );
};

export default Home;
