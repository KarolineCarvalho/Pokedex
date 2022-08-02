import Image from "@molecules/Image";
import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";

import styles from "./PokemonView.module.scss";

type Props = {
  pokemonName: string;
  pokemonTypes: string[];
  pokemonId: string;
  pokemonSpecies: string;
  pokemonImg: string;
};

const PokemonView = ({
  pokemonName,
  pokemonTypes,
  pokemonId,
  pokemonSpecies,
  pokemonImg,
}: Props) => {
  return (
    <div className={styles.pokemonView}>
      <PokemonHeader
        pokemonName={pokemonName}
        pokemonId={pokemonId}
        pokemonType={pokemonTypes}
      />
      <PokemonBackground pokemonType={pokemonTypes} />
      <div className={styles.pokemonImg}>
        <Image src={pokemonImg} alt={pokemonName} />
      </div>
    </div>
  );
};

export default PokemonView;
