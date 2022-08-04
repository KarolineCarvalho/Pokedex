import Text from "@atoms/Text";
import EvolutionPokemonDisplay from "@molecules/EvolutionPokemonDisplay";
import styles from "./EvolutionChain.module.scss";

type EvolutionDetail = {
  min_level: number;
  min_happiness: number;
  item: { name: string };
  trigger: { name: string };
  held_item: { name: string };
  time_of_day: string;
};

type Chain = {
  species: { name: string };
  evolves_to: Array<Chain>;
  evolution_details: Array<EvolutionDetail>;
};

type Props = {
  chain: Chain;
};

const getMethodDisplay = (evolutionDetail: EvolutionDetail): string => {
  const textDisplay = [];

  if (evolutionDetail.min_level)
    textDisplay.push("Lv. " + evolutionDetail.min_level);
  if (evolutionDetail.min_happiness)
    textDisplay.push("Hap. " + evolutionDetail.min_happiness);
  if (evolutionDetail.item)
    textDisplay.push("Use " + evolutionDetail.item.name);
  if (evolutionDetail.held_item)
    textDisplay.push("Hold " + evolutionDetail.held_item.name);
  if (evolutionDetail.time_of_day)
    textDisplay.push("On " + evolutionDetail.time_of_day);
  if (evolutionDetail.trigger.name === "trade") textDisplay.push("Trade");
  if (evolutionDetail.trigger.name === "three-critical-hits")
    textDisplay.push("Hit three critical hits");
  return textDisplay.join(", ");
};

const EvolutionChain = ({ chain }: Props): JSX.Element => {
  return (
    <>
      {chain.evolves_to.map((evolution) => (
        <div
          key={evolution.species.name}
          className={styles.evolutionChain__wrapper}
        >
          <div className={styles.evolutionChain}>
            <EvolutionPokemonDisplay pokemonId={chain.species.name} />
            <div className={styles.evolutionChain__methods}>
              <Text color="grey" size="large" weight="bold">
                →
              </Text>
              {evolution.evolution_details.map((evolution_details, i) => (
                <Text key={i} color="black" size="medium" weight="bold">
                  {getMethodDisplay(evolution_details)}
                </Text>
              ))}
            </div>
            <EvolutionPokemonDisplay pokemonId={evolution.species.name} />
          </div>
          <EvolutionChain chain={evolution} />
        </div>
      ))}
    </>
  );
};

export default EvolutionChain;
