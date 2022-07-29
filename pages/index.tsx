import type { NextPage } from "next";
import Head from "next/head";
import MainLayout from "@templates/MainLayout";
import HomeSearchSection from "@organisms/HomeSearchSection";
import HomeNavigation from "@organisms/HomeNavigation";
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
          <HomeSearchSection />
          <HomeNavigation />
        </MainLayout>
      </main>
    </div>
  );
};

export default Home;
