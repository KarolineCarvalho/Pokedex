import Text from "@atoms/Text";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./AboutTab.module.scss";
import { clearString } from "@utils/stringUtils";
import SizeBox from "@molecules/SizeBox";
import { getFlavorText } from "./utils/flavorText";
import { PokemonSpecies } from "types/PokemonFetchTypes";

type Props = {
  currentPokemon: string;
};

const AboutTab = ({ currentPokemon }: Props) => {
  const {
    pokemon: pokemonData,
    isError: isErrorData,
    isLoading: isLoadingData,
  } = useSinglePokemon(`pokemon/${currentPokemon}`);
  const {
    pokemon: pokemonSpecies,
    isError,
    isLoading,
  } = useSinglePokemon(`pokemon-species/${currentPokemon}`);

  const flavor_text =
    !isLoading && !isError ? getFlavorText(pokemonSpecies) : "loading...";

  return (
    <div className={styles.aboutTab}>
      {!isLoading && !isError && (
        <Text color="black" size="medium" weight="normal">
          {flavor_text}
        </Text>
      )}
      {!isLoadingData && !isErrorData && (
        <SizeBox weight={pokemonData.weight} height={pokemonData.height} />
      )}
    </div>
  );
};

export default AboutTab;
