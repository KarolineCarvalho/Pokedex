import Image from "@molecules/Image";
import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";

import styles from "./PokemonView.module.scss";

type Props = {
  backgroundColor: string;
  pokemonName: string;
  pokemonImg: string;
};

const PokemonView = ({ backgroundColor, pokemonName, pokemonImg }: Props) => {
  return (
    <div className={styles.pokemonView}>
      <PokemonHeader />
      <PokemonBackground />
      <div className={styles.pokemonImg}>
        <Image
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          }
          alt={pokemonName}
        />
      </div>
    </div>
  );
};

export default PokemonView;
