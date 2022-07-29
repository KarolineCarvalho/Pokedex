import DottedIcon from "@atoms/DottedIcon";
import PokeballIcon from "@atoms/PokeballIcon";
import SquareIcon from "@atoms/SquareIcon";
import styles from "./PokemonBackground.module.scss";

const PokemonBackground = (): JSX.Element => {
  return (
    <div>
      <SquareIcon />
      <DottedIcon />
      <div className={styles.pokeballContainer}>
        <PokeballIcon color="grey" />
      </div>
    </div>
  );
};

export default PokemonBackground;
