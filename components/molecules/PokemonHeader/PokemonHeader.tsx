import BackArrow from "@atoms/BackArrow";
import Heading from "@atoms/Heading";
import HeartIcon from "@atoms/HeartIcon";
import Text from "@atoms/Text";
import TypeBox from "@molecules/TypeBox";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./PokemonHeader.module.scss";

type Props = {
  pokemonName: string;
  pokemonId: string;
  pokemonType: string[];
  pokemonSpecie: string;
};

const PokemonHeader = ({
  pokemonName,
  pokemonId,
  pokemonType,
  pokemonSpecie,
}: Props): JSX.Element => {
  /* const { pokemon, isLoading } = useSinglePokemon();
  console.log(pokemon); */
  return (
    <div className={styles.pokemonHeader}>
      <div className={styles.actionsContainer}>
        <BackArrow />
        <div className={styles["actionsContainer__heart"]}>
          <HeartIcon />
        </div>
      </div>

      <div className={styles.pokemonInfo}>
        <Heading white>{pokemonName}</Heading>
        <div className={styles["pokemonInfo--justifyToEnd"]}>
          <Text color="white" size="large" weight="bold">
            {pokemonId}
          </Text>
        </div>

        <div className={styles.pokemonInfo__pokemonType}>
          {/* {pokemonType.map((type) => {
            <TypeBox type={type} />;
          })} */}
        </div>

        <div className={styles["pokemonInfo--justifyToEnd"]}>
          <Text color="white" size="medium" weight="normal">
            {pokemonName}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PokemonHeader;
