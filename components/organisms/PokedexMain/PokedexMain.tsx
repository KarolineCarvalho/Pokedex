import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import Link from "next/link";
import styles from "./PokedexMain.module.scss";
import { useRouter } from "next/router";
import { filterPokemon } from "./utils/filterPokemon";
import usePokemon from "hooks/usePokemon";
import Pokemon from "@models/Pokemon";
import { useEffect, useMemo, useState } from "react";
import SkeletonBox from "@atoms/SkeletonBox";
import Image from "@molecules/Image";
import Text from "@atoms/Text";

type Card = Pick<Pokemon, "id" | "name" | "types" | "sprite" | "abilities">;

const PokedexMain = (): JSX.Element => {
  const router = useRouter();
  const { search } = router.query;

  const { pokemon, isLoading } = usePokemon({ page: 0 });

  const [count, setCount] = useState(1);

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
            pokemonFiltered.slice(0, count * 24).map((singlePokemon) => (
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
        {pokemonFiltered && (
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
