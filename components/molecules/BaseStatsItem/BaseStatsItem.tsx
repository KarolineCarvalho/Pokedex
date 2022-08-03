import Text from "@atoms/Text";
import StatsBar from "@molecules/StatsBar";
import styles from "./BaseStatsItem.module.scss";

type Props = {
  statsName: string;
  statsLevel: number;
  base: 255 | 1530;
};

const BaseStatsItem = ({ statsName, statsLevel, base }: Props): JSX.Element => {
  if (statsName === "special-attack") statsName = "Sp. Atk";
  if (statsName === "special-defense") statsName = "Sp. Def";
  if (statsName === "hp") statsName = "HP";

  return (
    <div className={styles.statsItem}>
      <div className={styles.statsItem__name}>
        <Text size="medium" color="grey" weight="normal">
          {statsName}
        </Text>
      </div>

      <Text size="medium" color="black" weight="normal">
        {statsLevel}
      </Text>
      <StatsBar statsValue={statsLevel} base={base} />
    </div>
  );
};
export default BaseStatsItem;
