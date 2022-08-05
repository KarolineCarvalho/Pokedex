import BaseStatsItem from "@molecules/BaseStatsItem";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./BaseStatsTab.module.scss";

type Props = {
  currentPokemon: string;
};

const BaseStatsTab = ({ currentPokemon }: Props): JSX.Element => {
  const { pokemon, isLoading } = useSinglePokemon(`pokemon/${currentPokemon}`);

  if (isLoading) return <div>Loading...</div>;
  if (!pokemon) return <div>No Stats</div>;

  type Stats = { stat: { name: string }; base_stat: number };

  const pokemonStats: { statLevel: number; stat: string }[] = pokemon.stats.map(
    (item: Stats) => {
      return {
        stat: item.stat.name,
        statLevel: item.base_stat,
      };
    }
  );

  const total = [pokemonStats][0]
    .map((item) => item.statLevel)
    .reduce((prev: number, curr: number) => prev + curr, 0);

  return (
    <div className={styles.statsTab}>
      {pokemonStats.map((item) => {
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
