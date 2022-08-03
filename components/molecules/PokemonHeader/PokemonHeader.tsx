import BackArrow from "@atoms/BackArrow";
import Heading from "@atoms/Heading";
import HeartIcon from "@atoms/HeartIcon";
import Text from "@atoms/Text";
import TypeBox from "@molecules/TypeBox";
import { useState } from "react";
import PokemonType from "types/PokemonTypes";
import styles from "./PokemonHeader.module.scss";

type Props = {
  pokemonName: string;
  pokemonId: number;
  pokemonType: PokemonType[];
  pokemonSpecie: string;
};

const PokemonHeader = ({
  pokemonName,
  pokemonId,
  pokemonType,
  pokemonSpecie,
}: Props) => {
  const [favorite, setFavorite] = useState<boolean>(
    !!localStorage.getItem(pokemonName)
  );

  const toggleFavorite = (item: string) => {
    const isLiked = localStorage.getItem(item);
    if (isLiked === null) {
      localStorage.setItem(item, "true");
      setFavorite(true);
    }
    if (isLiked === "true") {
      localStorage.removeItem(item);
      setFavorite(false);
    }
  };

  return (
    <div className={styles.pokemonHeader}>
      <div className={styles.actionsContainer}>
        <BackArrow />
        <div
          className={styles["actionsContainer__heart"]}
          onClick={() => {
            toggleFavorite(`${pokemonName}`);
          }}
        >
          {!favorite ? <HeartIcon /> : <HeartIcon filled />}
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
