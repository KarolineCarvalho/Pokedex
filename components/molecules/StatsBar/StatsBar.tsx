import createClasses from "@utils/createClasses";
import styles from "./StatsBar.module.scss";

type Props = {
  statsValue: number;
};

const StatsBar = ({ statsValue }: Props): JSX.Element => {
  let barFill;

  const classes = createClasses("chartBar", styles);

  barFill = Math.round((statsValue / 255) * 100);

  const fillCondition =
    barFill > 50
      ? classes.getElement("fill--green")
      : classes.getElement("fill--red");
  return (
    <div className={classes.getClasses()}>
      <div className={fillCondition} style={{ width: `${barFill}%` }}></div>
    </div>
  );
};
export default StatsBar;
