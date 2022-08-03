import BaseStatsItem from "@molecules/BaseStatsItem";
import styles from "./BaseStatsTab.module.scss";

type Props = {
  currentPokemon: string;
};

const BaseStatsTab = ({ currentPokemon }: Props): JSX.Element => {
  return (
    <div className={styles.statsTab}>
      <BaseStatsItem />
      <BaseStatsItem />
      <BaseStatsItem />
      <BaseStatsItem />
      <BaseStatsItem />
    </div>
  );
};
export default BaseStatsTab;
