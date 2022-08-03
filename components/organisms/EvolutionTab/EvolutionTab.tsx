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
    <div>
      {evolutionchain?.chain && <EvolutionChain chain={evolutionchain.chain} />}
    </div>
  );
};

export default EvolutionTab;
