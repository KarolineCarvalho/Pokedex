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
}: Props) => {
  return (
    <div className={styles.pokemonHeader}>
      <div className={styles.actionsContainer}>
        <BackArrow />
        <div className={styles["actionsContainer__heart"]}>
          <HeartIcon />
        </div>
      </div>

      <div className={styles.pokemonInfo}>
        <div className={styles["pokemonInfo__pokemonName"]}>
          <Heading white>{pokemonName}</Heading>
        </div>

        <div className={styles["pokemonInfo--justifyToEnd"]}>
          <Text color="white" size="large" weight="bold">
            #{pokemonId.toString().padStart(3, "0")}
          </Text>
        </div>

        <div className={styles.pokemonInfo__pokemonType}>
          {pokemonType.map((type) => (
            <TypeBox key={type} type={type} />
          ))}
        </div>

        <div className={styles["pokemonInfo--justifyToEnd"]}>
          <Text color="white" size="medium" weight="normal">
            {pokemonSpecie}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PokemonHeader;
