import Text from "@atoms/Text";
import StatsBar from "@molecules/StatsBar";
import styles from "./BaseStatsItem.module.scss";

type Props = {
  statsName: string;
  statsLevel: number;
};

const BaseStatsItem = ({ statsName, statsLevel }: Props): JSX.Element => {
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
      <StatsBar statsValue={statsLevel} />
    </div>
  );
};
export default BaseStatsItem;
