import BackArrow from "@molecules/BackArrow";
import Heading from "@atoms/Heading";
import HeartIcon from "@atoms/HeartIcon";
import Text from "@atoms/Text";
import TypeBox from "@molecules/TypeBox";
import { useEffect, useState } from "react";
import PokemonType from "models/PokemonTypes";
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
  const [favorite, setFavorite] = useState<boolean>(false);

  useEffect(() => {
    let favorites = [];
    if (localStorage.getItem("favorites"))
      favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorite(favorites.includes(pokemonName));
  }, [pokemonName]);

  const toggleFavorite = (item: string) => {
    let favorites: string[] = [];
    if (localStorage.getItem("favorites"))
      favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isLiked = favorites.includes(pokemonName);
    if (!isLiked) {
      favorites.push(pokemonName);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorite(true);
    }
    if (isLiked) {
      favorites = favorites.filter((f) => f !== pokemonName);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setFavorite(true);
    }
  };

  return (
    <div className={styles.pokemonHeader}>
      <div className={styles.actionsContainer}>
        <BackArrow href="/pokedex" />
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
