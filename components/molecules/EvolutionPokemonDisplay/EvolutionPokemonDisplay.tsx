import PokeballIcon from "@atoms/PokeballIcon";
import Text from "@atoms/Text";
import Image from "@molecules/Image";
import useSinglePokemon from "hooks/useSinglePokemon";
import Link from "next/link";
import styles from "./EvolutionPokemonDisplay.module.scss";

type Props = {
  pokemonId: string | number;
};

const EvolutionPokemonDisplay = ({ pokemonId }: Props) => {
  const { pokemon } = useSinglePokemon(`pokemon/${pokemonId}`);

  return (
    <div className={styles.pokemonDisplay}>
      <Link href={`/pokemon/${pokemonId}`}>
        <a>
          <div className={styles.pokemonDisplay__imageWrapper}>
            <div className={styles.pokemonDisplay__pokeball}>
              <PokeballIcon color="#303943" opacity="high" />
            </div>
            {pokemon?.sprites && (
              <Image
                src={pokemon.sprites.other["official-artwork"]["front_default"]}
                alt={pokemon.name}
              />
            )}
          </div>
        </a>
      </Link>
      <Text color="black" size="medium" weight="normal" capitilize>
        {pokemon?.name || "..."}
      </Text>
    </div>
  );
};

export default EvolutionPokemonDisplay;
