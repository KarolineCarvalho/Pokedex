import styles from "./Text.module.scss";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  color: "black" | "grey" | "white";
  size: "small" | "medium" | "large";
  weight: "normal" | "bold";
};

const Text = ({ children, color, size, weight }: Props): JSX.Element => {
  const classList = [
    styles[`text--${color}`],
    styles[`text--${size}`],
    styles[`text--${weight}`],
  ];

  const classes = classList.join(" ");

  return <p className={classes}>{children}</p>;
};

export default Text;
