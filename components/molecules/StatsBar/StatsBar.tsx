import createClasses from "@utils/createClasses";
import styles from "./StatsBar.module.scss";

type Props = {
  statsValue: number;
  base: 255 | 1530;
};

const StatsBar = ({ statsValue, base }: Props): JSX.Element => {
  let barFill;

  const classes = createClasses("chartBar", styles);

  barFill = Math.round((statsValue / base) * 100);

  const fillCondition =
    barFill > 30
      ? classes.getElement("fill--green")
      : classes.getElement("fill--red");
  return (
    <div className={classes.getClasses()}>
      <div
        className={classes.getElement("fill") + " " + fillCondition}
        style={{ width: `${barFill}%` }}
      ></div>
    </div>
  );
};
export default StatsBar;
