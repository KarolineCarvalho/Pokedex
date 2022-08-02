import Image from "@molecules/Image";
import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";
import PokemonType from "types/PokemonTypes";
import styles from "./PokemonView.module.scss";

type Props = {
  pokemonName: string;
  pokemonTypes: PokemonType[];
  pokemonId: string;
  pokemonSpecies: any;
  pokemonImg: string;
};

const PokemonView = ({
  pokemonName,
  pokemonTypes,
  pokemonId,
  pokemonSpecies,
  pokemonImg,
}: Props) => {
  const extractSpecie = pokemonSpecies.genera.filter(
    (genus: any) => genus.language.name === "en"
  )[0].genus;

  return (
    <div className={styles.pokemonView}>
      <PokemonHeader
        pokemonName={pokemonName}
        pokemonId={pokemonId}
        pokemonType={pokemonTypes}
        pokemonSpecie={extractSpecie}
      />
      <PokemonBackground pokemonType={pokemonTypes} />
      <div className={styles.pokemonImg}>
        <Image src={pokemonImg} alt={pokemonName} />
      </div>
    </div>
  );
};

export default PokemonView;
