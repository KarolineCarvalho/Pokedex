import styles from "./Grid.module.scss";
import createClasses from "@utils/createClasses";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  type: "home" | "pokedex";
};

const Grid = ({ children, type }: Props): JSX.Element => {
  const classes = createClasses("grid", styles);
  classes.addClass(`${type}`);
  return (
    <ul className={classes.getClasses()}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <li key={i} className={classes.getElement("item")}>
            {child}
          </li>
        ))
      ) : (
        <li className={classes.getElement("item")}>children</li>
      )}
    </ul>
  );
};

export default Grid;
