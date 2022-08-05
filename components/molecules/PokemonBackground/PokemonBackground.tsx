import DottedIcon from "@atoms/DottedIcon";
import PokeballIcon from "@atoms/PokeballIcon";
import SquareIcon from "@atoms/SquareIcon";
import createClasses from "@utils/createClasses";
import PokemonType from "models/PokemonTypes";
import styles from "./PokemonBackground.module.scss";

type Props = {
  pokemonType: PokemonType[];
};

const PokemonBackground = ({ pokemonType }: Props): JSX.Element => {
  const classes = createClasses("pokemonBackground", styles);

  (pokemonType.length > 0 || pokemonType.length === 1) &&
  pokemonType[0] !== "normal"
    ? classes.addClass("type--" + pokemonType[0])
    : classes.addClass("type--" + pokemonType[1]);

  if (pokemonType.length === 1 && pokemonType[0] === "normal")
    classes.addClass("type--" + pokemonType[0]);

  return (
    <div className={classes.getClasses()}>
      <div className={classes.getElement("squareIcon")}>
        <SquareIcon />
      </div>
      <div className={classes.getElement("dottedIcon")}>
        <DottedIcon />
      </div>

      <div className={classes.getElement("pokeballContainer")}>
        <PokeballIcon />
      </div>
    </div>
  );
};

export default PokemonBackground;
