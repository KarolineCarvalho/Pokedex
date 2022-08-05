import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import Link from "next/link";
import styles from "./Favorites.module.scss";
import { useRouter } from "next/router";
import { filterPokemon } from "./utils/filterPokemon";
import usePokemon from "hooks/usePokemon";
import { useEffect, useMemo, useState } from "react";
import SkeletonBox from "@atoms/SkeletonBox";
import Image from "@molecules/Image";
import Text from "@atoms/Text";

const itemsOnPage = 24;

const PokedexMain = (): JSX.Element => {
  const router = useRouter();
  const { search } = router.query;

  const { pokemon, isLoading } = usePokemon({ page: 0 });

  const [count, setCount] = useState(1);

  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    let favorites = [];
    if (localStorage.getItem("favorites"))
      favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(favorites);
  }, []);

  const pokemonFiltered = useMemo(
    () =>
      filterPokemon(
        search,
        pokemon?.filter((pk) => favorites.includes(pk.name))
      ),
    [pokemon, search, favorites]
  );

  useEffect(() => {
    if (search !== undefined) setCount(1);
  }, [search]);

  const handleLoadMore = () => {
    setCount((count) => count + 1);
  };

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
            pokemonFiltered
              .slice(0, count * itemsOnPage)
              .map((singlePokemon) => (
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
        {pokemonFiltered && pokemonFiltered.length > count * itemsOnPage && (
          <button
            type="button"
            onClick={handleLoadMore}
            className={styles.pokedexSection__loadButton}
          >
            <Text color="black" size="medium" weight="bold">
              Load More
            </Text>
            <div className={styles.pokedexSection__loadImage}>
              <Image src="/images/plusle.png" alt="Plusle" />
            </div>
          </button>
        )}
      </section>
    </main>
  );
};

export default PokedexMain;
