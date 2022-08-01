import DottedIcon from "@atoms/DottedIcon";
import PokeballIcon from "@atoms/PokeballIcon";
import SquareIcon from "@atoms/SquareIcon";
import createClasses from "@utils/createClasses";
import Pokemon from "types/Pokemon";
import styles from "./PokemonBackground.module.scss";

type Props = {
  pokemon: Pick<Pokemon, "types">;
};
const PokemonBackground = ({ pokemon }: Props): JSX.Element => {
  /*  const { types } = pokemon;
  const classes = createClasses("pokemonBackground", styles);
  if (types.length > 0) classes.addClass("type--" + types[0]); */
  return (
    <div className={/* classes.getClasses() */ styles.pokemonBackground}>
      <SquareIcon />
      <DottedIcon />
      <div className={styles.pokeballContainer}>
        <PokeballIcon />
      </div>
    </div>
  );
};

export default PokemonBackground;
