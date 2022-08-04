import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import EvolutionChain from "@molecules/EvolutionChain";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./EvolutionTab.module.scss";

type Props = {
  currentPokemon: string;
};

const EvolutionTab = ({ currentPokemon }: Props) => {
  const { pokemon } = useSinglePokemon(`pokemon-species/${currentPokemon}`);

  const chainID = pokemon?.evolution_chain?.url?.match(/\d+\/$/);
  const { pokemon: evolutionchain } = useSinglePokemon(
    chainID ? `evolution-chain/${chainID[0]}` : "",
    !!pokemon
  );

  return (
    <div className={styles.evolutionTab}>
      <Heading level={3}>Evolution Chain</Heading>
      {evolutionchain?.chain && <EvolutionChain chain={evolutionchain.chain} />}
      {evolutionchain?.chain?.evolves_to &&
        evolutionchain?.chain?.evolves_to.length === 0 && (
          <Text color="black" size="medium" weight="normal">
            No evolution.
          </Text>
        )}
    </div>
  );
};

export default EvolutionTab;
