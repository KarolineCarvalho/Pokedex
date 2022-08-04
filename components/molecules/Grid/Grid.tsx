import styles from "./Grid.module.scss";
import createClasses from "@utils/createClasses";
import useToggleList from "store/useToggleList";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  type: "home" | "pokedex";
};

const Grid = ({ children, type }: Props): JSX.Element => {
  const listState = useToggleList((state) => state.listView);

  console.log(listState);
  const classes = createClasses("grid", styles);

  listState
    ? classes.addClass(`${type}`)
    : classes.addClass(`${type}--singleColumn`);
  return (
    <ul className={classes.getClasses()}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <li key={i} className={classes.getElement("item")}>
            {child}
          </li>
        ))
      ) : (
        <li className={classes.getElement("item")}>{children}</li>
      )}
    </ul>
  );
};

export default Grid;
