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
      {evolutionchain?.chain?.evolves_to &&
        evolutionchain.chain.evolves_to.map((evolution: any, i: number) => (
          <p key={i}>
            {evolutionchain.chain.species.name} {"->"} {evolution.species.name}
          </p>
        ))}
    </div>
  );
};

export default EvolutionTab;
