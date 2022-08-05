import createClasses from "@utils/createClasses";
import styles from "./DottedIcon.module.scss";

type Props = {
  color?: string;
  opacity?: "normal" | "high";
};

const DottedIcon = ({ color, opacity }: Props): JSX.Element => {
  const classes = createClasses("DottedIcon", styles);
  if (opacity) classes.addClass("opacity--" + opacity);

  const fillCondition = color ? color : "white";
  return (
    <svg
      className={classes.getClasses()}
      width="100%"
      height="100%"
      viewBox="0 0 57 31"
      fill={color ? color : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2.5" cy="2.5" r="2.5" fill={fillCondition} />
      <circle cx="15.5" cy="2.5" r="2.5" fill={fillCondition} />
      <circle cx="28.5" cy="2.5" r="2.5" fill={fillCondition} />
      <circle cx="41.5" cy="2.5" r="2.5" fill={fillCondition} />
      <circle cx="54.5" cy="2.5" r="2.5" fill={fillCondition} />
      <circle cx="2.5" cy="15.5" r="2.5" fill={fillCondition} />
      <circle cx="15.5" cy="15.5" r="2.5" fill={fillCondition} />
      <circle cx="28.5" cy="15.5" r="2.5" fill={fillCondition} />
      <circle cx="41.5" cy="15.5" r="2.5" fill={fillCondition} />
      <circle cx="54.5" cy="15.5" r="2.5" fill={fillCondition} />
      <circle cx="2.5" cy="28.5" r="2.5" fill={fillCondition} />
      <circle cx="15.5" cy="28.5" r="2.5" fill={fillCondition} />
      <circle cx="28.5" cy="28.5" r="2.5" fill={fillCondition} />
      <circle cx="41.5" cy="28.5" r="2.5" fill={fillCondition} />
      <circle cx="54.5" cy="28.5" r="2.5" fill={fillCondition} />
    </svg>
  );
};

export default DottedIcon;
