import Heading from "@atoms/Heading";
import Grid from "@molecules/Grid";
import PokeCard from "@molecules/PokeCard";
import Link from "next/link";
import styles from "./PokedexMain.module.scss";
import { useRouter } from "next/router";
import { filterPokemon } from "./utils/filterPokemon";
import usePokemon from "hooks/usePokemon";
import Pokemon from "@models/Pokemon";
import { graphQLPKList } from "@models/PokemonFetchTypes";

type Props = {
  allPokemon: any[];
};

type Card = Pick<Pokemon, "id" | "name" | "types" | "sprite">;

const PokedexMain = ({ allPokemon }: Props): JSX.Element => {
  const router = useRouter();
  const { search } = router.query;

  const { pokemon } = usePokemon();
  /*
  const pokemonFiltered = useMemo(
    () => filterPokemon(search, pokemon),
    [pokemon, search]
  );
  */
  console.log("pokemon", pokemon);
  const pokemonFiltered = pokemon?.map((pk) => {
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
    };
    return newpk;
  });

  console.log("pokemonFiltered", pokemonFiltered);

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
