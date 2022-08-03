import Image from "@molecules/Image";
import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";
import ShadowPokemon from "@molecules/ShadowPokemon";
import createClasses from "@utils/createClasses";
import useSinglePokemon from "hooks/useSinglePokemon";
import Link from "next/link";
import PokemonType from "types/PokemonTypes";
import styles from "./PokemonView.module.scss";

type Props = {
  pokemonName: string;
  pokemonTypes: PokemonType[];
  pokemonId: number;
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

  const shadowPreviousClasses = createClasses("pokemonShadow", styles, [
    "previous",
  ]);
  const shadowNextClasses = createClasses("pokemonShadow", styles, ["next"]);

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
        <Image src={pokemonImg} alt={pokemonName} bottom />
      </div>
      <div className={shadowPreviousClasses.getClasses()}>
        <ShadowPokemon pokemonId={pokemonId - 1} />
      </div>
      <div className={shadowNextClasses.getClasses()}>
        <ShadowPokemon pokemonId={pokemonId + 1} />
      </div>
    </div>
  );
};

export default PokemonView;
