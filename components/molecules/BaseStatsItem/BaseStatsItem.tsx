import Text from "@atoms/Text";
import StatsBar from "@molecules/StatsBar";
import styles from "./BaseStatsItem.module.scss";

type Props = {
  StatsName: string;
  StatsLevel: string;
};

const BaseStatsItem = ({ StatsName, StatsLevel }: Props): JSX.Element => {
  return (
    <div className={styles.statsItem}>
      <Text size="medium" color="grey" weight="normal">
        Defense
      </Text>
      <Text size="medium" color="black" weight="normal">
        45
      </Text>
      <StatsBar statsValue={51} />
    </div>
  );
};
export default BaseStatsItem;
