import createClasses from "@utils/createClasses";
import styles from "./DottedIcon.module.scss";

type Props = {
  color?: string;
  opacity?: "normal" | "high";
};

const DottedIcon = ({ color, opacity }: Props): JSX.Element => {
  const classes = createClasses("DottedIcon", styles);
  if (opacity) classes.addClass("opacity--" + opacity);
  return (
    <div className={classes.getClasses()}>
      <svg
        width="57"
        height="31"
        viewBox="0 0 57 31"
        fill={color ? color : "white"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="2.5" cy="2.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="15.5" cy="2.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="28.5" cy="2.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="41.5" cy="2.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="54.5" cy="2.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="2.5" cy="15.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="15.5" cy="15.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="28.5" cy="15.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="41.5" cy="15.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="54.5" cy="15.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="2.5" cy="28.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="15.5" cy="28.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="28.5" cy="28.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="41.5" cy="28.5" r="2.5" fill={color ? color : "white"} />
        <circle cx="54.5" cy="28.5" r="2.5" fill={color ? color : "white"} />
      </svg>
    </div>
  );
};

export default DottedIcon;
