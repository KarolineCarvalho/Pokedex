import DottedIcon from "@atoms/DottedIcon";
import PokeballIcon from "@atoms/PokeballIcon";
import SquareIcon from "@atoms/SquareIcon";
import createClasses from "@utils/createClasses";
import PokemonType from "types/pokemonTypes";
import styles from "./PokemonBackground.module.scss";

type Props = {
  pokemonType: PokemonType[];
};

const PokemonBackground = ({ pokemonType }: Props): JSX.Element => {
  const classes = createClasses("pokemonBackground", styles);
  if (pokemonType.length > 0) classes.addClass("type--" + pokemonType[0]);
  return (
    <div className={classes.getClasses()}>
      <SquareIcon />
      <DottedIcon />
      <div className={styles.pokeballContainer}>
        <PokeballIcon />
      </div>
    </div>
  );
};

export default PokemonBackground;
