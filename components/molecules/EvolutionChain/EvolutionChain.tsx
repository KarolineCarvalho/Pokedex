import Text from "@atoms/Text";
import EvolutionPokemonDisplay from "@molecules/EvolutionPokemonDisplay";
import styles from "./EvolutionChain.module.scss";

type EvolutionDetail = {
  min_level: number;
  min_happiness: number;
  item: { name: string };
  trigger: { name: string };
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
  console.log(evolutionDetail);
  const typesName = ["level-up", "use-item"];
  const evolutionTypes = {
    "level-up": (evolutionDetail: EvolutionDetail) =>
      evolutionDetail.min_level
        ? "Lv." + evolutionDetail.min_level
        : "Happiness: " + evolutionDetail.min_happiness,
    "use-item": (evolutionDetail: EvolutionDetail) => evolutionDetail.item.name,
  };
  const type = evolutionDetail.trigger.name;
  const display = typesName.includes(type)
    ? evolutionTypes[type as "level-up" | "use-item"](evolutionDetail)
    : evolutionDetail.trigger.name;
  return display;
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
              {evolution.evolution_details.map((evolution_details) => (
                <Text
                  key={evolution_details.trigger.name}
                  color="black"
                  size="medium"
                  weight="bold"
                >
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
