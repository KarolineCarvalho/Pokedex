import BaseStatsItem from "@molecules/BaseStatsItem";
import useSinglePokemon from "hooks/useSinglePokemon";
import styles from "./BaseStatsTab.module.scss";

type Props = {
  currentPokemon: string;
};

const BaseStatsTab = ({ currentPokemon }: Props) => {
  const { pokemon, isLoading, isError } = useSinglePokemon(
    `pokemon/${currentPokemon}`
  );

  if (isLoading) <div>Loading...</div>;
  if (pokemon) {
    const pokemonStats = pokemon.stats.map((item: any) => {
      return { stat: item.stat.name, statLevel: item.base_stat };
    });

    const total = [pokemonStats][0]
      .map((item: any) => item.statLevel)
      .reduce((prev: number, curr: number) => prev + curr, 0);

    return (
      <div className={styles.statsTab}>
        {pokemonStats.map((item: any) => {
          return (
            <BaseStatsItem statsName={item.stat} statsLevel={item.statLevel} />
          );
        })}

        <BaseStatsItem statsName={"Total"} statsLevel={total} />
      </div>
    );
  }
};
export default BaseStatsTab;
