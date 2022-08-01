import BackArrow from "@atoms/BackArrow";
import Heading from "@atoms/Heading";
import HeartIcon from "@atoms/HeartIcon";
import Text from "@atoms/Text";
import TypeBox from "@molecules/TypeBox";
import styles from "./PokemonHeader.module.scss";

type Props = {
  pokemonName: string;
  pokemonId: string;
  pokemonType: string;
  pokemonSpecie: string;
};

const PokemonHeader = ({
  pokemonName,
  pokemonId,
  pokemonType,
  pokemonSpecie,
}: Props): JSX.Element => {
  return (
    <div className={styles.pokemonHeader}>
      <div className={styles.actionsContainer}>
        <BackArrow />
        <div className={styles["actionsContainer__heart"]}>
          <HeartIcon />
        </div>
      </div>

      <div className={styles.pokemonInfo}>
        <Heading white>Bulbasaur</Heading>
        <div className={styles["pokemonInfo--justifyToEnd"]}>
          <Text color="white" size="large" weight="bold">
            #001
          </Text>
        </div>

        <div className={styles.pokemonInfo__pokemonType}>
          <TypeBox type="grass" />
          <TypeBox type="poison" />
        </div>

        <div className={styles["pokemonInfo--justifyToEnd"]}>
          <Text color="white" size="medium" weight="normal">
            Seed Pokemon
          </Text>
        </div>
      </div>
    </div>
  );
};

export default PokemonHeader;
