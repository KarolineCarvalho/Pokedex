import BaseStatsItem from "@molecules/BaseStatsItem";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./BaseStatsTab.module.scss";

type Props = {
  currentPokemon: string;
};

const BaseStatsTab = ({ currentPokemon }: Props): JSX.Element => {
  const { pokemon, isLoading, isError } = useSinglePokemon(
    `pokemon/${currentPokemon}`
  );

  if (!pokemon) return <div>Loading...</div>;

  const pokemonStats = pokemon.stats.map((item: any) => {
    return {
      stat: item.stat.name,
      statLevel: item.base_stat,
    };
  });

  const total = [pokemonStats][0]
    .map((item: any) => item.statLevel)
    .reduce((prev: number, curr: number) => prev + curr, 0);

  return (
    <div className={styles.statsTab}>
      {pokemonStats.map((item: any) => {
        return (
          <BaseStatsItem
            key={item.stat}
            statsName={item.stat}
            statsLevel={item.statLevel}
            base={255}
          />
        );
      })}

      <BaseStatsItem statsName={"Total"} statsLevel={total} base={1530} />
    </div>
  );
};
export default BaseStatsTab;
