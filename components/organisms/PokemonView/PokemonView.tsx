import Image from "@molecules/Image";
import PokemonBackground from "@molecules/PokemonBackground";
import PokemonHeader from "@molecules/PokemonHeader";
import ShadowPokemon from "@molecules/ShadowPokemon";
import createClasses from "@utils/createClasses";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./PokemonView.module.scss";

type Props = {
  pokeId: number | string | undefined;
};

const PokemonView = ({ pokeId }: Props) => {
  const { pokemon } = useSinglePokemon(`pokemon/${pokeId}`, !!pokeId);

  const { pokemon: pokemonSpecies } = useSinglePokemon(
    `pokemon-species/${pokeId}`,
    !!pokeId
  );

  const pokeTypes = pokemon?.types.map((type: any) => {
    return type.type.name;
  }) || ["normal"];
  const pokeImg = pokemon?.sprites.other["official-artwork"]["front_default"];

  const extractSpecie = pokemonSpecies?.genera.filter(
    (genus: any) => genus.language.name === "en"
  )[0].genus;

  const shadowPreviousClasses = createClasses("pokemonShadow", styles, [
    "previous",
  ]);
  const shadowNextClasses = createClasses("pokemonShadow", styles, ["next"]);

  return (
    <div className={styles.pokemonView}>
      <PokemonHeader
        pokemonName={pokemon?.name || "missigno"}
        pokemonId={pokemon?.id || "???"}
        pokemonType={pokeTypes}
        pokemonSpecie={extractSpecie}
      />
      <PokemonBackground pokemonType={pokeTypes} />
      <div className={styles.pokemonImg}>
        <Image
          src={pokeImg || "/images/missingno.webp"}
          alt={pokemon?.name || "?"}
          bottom
          blurLoading
        />
      </div>
      <div className={shadowPreviousClasses.getClasses()}>
        <ShadowPokemon pokemonId={pokemon?.id - 1} />
      </div>
      <div className={shadowNextClasses.getClasses()}>
        <ShadowPokemon pokemonId={pokemon?.id + 1} />
      </div>
    </div>
  );
};

export default PokemonView;
