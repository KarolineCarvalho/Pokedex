import Text from "@atoms/Text";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./AboutTab.module.scss";
import { clearString } from "@utils/stringUtils";

type Props = {
  currentPokemon: string;
};

const AboutTab = ({ currentPokemon }: Props) => {
  const {
    pokemon: pokemonSpecies,
    isError,
    isLoading,
  } = useSinglePokemon(`pokemon-species/${currentPokemon}`);

  let flavor_text = "loading...";
  if (!isLoading && !isError)
    flavor_text = clearString(
      pokemonSpecies["flavor_text_entries"][0]["flavor_text"]
    );

  if (!isLoading && !isError) {
    console.log(pokemonSpecies["flavor_text_entries"][0]["flavor_text"]);
    console.log(flavor_text);
  }

  return (
    <div className={styles.aboutTab}>
      {!isLoading && !isError && (
        <Text color="black" size="medium" weight="normal">
          {flavor_text}
        </Text>
      )}
    </div>
  );
};

export default AboutTab;
