import createClasses from "@utils/createClasses";
import styles from "./SquareIcon.module.scss";

type Props = {
  color?: string;
  opacity?: "normal" | "high";
};

const SquareIcon = ({ color, opacity }: Props): JSX.Element => {
  const classes = createClasses("SquareIcon", styles);
  if (opacity) classes.addClass("opacity--" + opacity);
  return (
    <svg
      className={styles.SquareIcon}
      width="100%"
      height="100%"
      viewBox="0 0 166 166"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className={classes.getClasses()}>
        <rect
          x="134.02"
          y="-5"
          width="143.924"
          height="143.924"
          rx="24"
          transform="rotate(75 134.02 -5)"
          fill={color ? color : "white"}
        />
      </g>
    </svg>
  );
};

export default SquareIcon;
