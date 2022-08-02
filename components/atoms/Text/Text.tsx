import styles from "./Text.module.scss";
import createClasses from "@utils/createClasses";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  color: "black" | "grey" | "white";
  size: "small" | "medium" | "large";
  weight: "normal" | "bold";
  capitilize?: boolean;
};

const Text = ({
  children,
  color,
  size,
  weight,
  capitilize,
}: Props): JSX.Element => {
  const classes = createClasses("text", styles, [color, size, weight]);
  if (capitilize) classes.addClass("capitilize");
  return <p className={classes.getClasses()}>{children}</p>;
};

export default Text;
