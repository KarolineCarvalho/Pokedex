import Text from "@atoms/Text";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./AboutTab.module.scss";
import SizeBox from "@molecules/SizeBox";
import { getFlavorText } from "./utils/flavorText";
import BreedingInfo from "@molecules/BreedingInfo";
import TrainingInfo from "@molecules/TrainingInfo";

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
    <section aria-label="About" className={styles.aboutTab}>
      {!isLoading && !isError && (
        <Text color="black" size="medium" weight="normal">
          {flavor_text}
        </Text>
      )}
      {!isLoadingData && !isErrorData && (
        <SizeBox weight={pokemonData.weight} height={pokemonData.height} />
      )}
      <BreedingInfo
        eggGroups={pokemonSpecies?.egg_groups || [{ name: "loading" }]}
        gender_ratio={
          pokemonSpecies?.gender_rate !== undefined
            ? pokemonSpecies?.gender_rate
            : -1
        }
      />
      <TrainingInfo baseXP={pokemonData?.base_experience || "loading"} />
    </section>
  );
};

export default AboutTab;
