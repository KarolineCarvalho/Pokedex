import styles from "./Grid.module.scss";
import createClasses from "@utils/createClasses";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  type: "home" | "pokedex";
};

const Grid = ({ children, type }: Props): JSX.Element => {
  const classes = createClasses("grid", styles);
  classes.addClass(`${type}`);
  return <div className={classes.getClasses()}>{children}</div>;
};

export default Grid;
