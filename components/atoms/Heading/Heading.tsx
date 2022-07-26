import createClasses from "@utils/createClasses";
import React from "react";
import styles from "./Heading.module.scss";

type Props = {
  level?: number;
  children: React.ReactNode[] | React.ReactNode;
  white?: boolean;
};

const Heading = ({ children, level = 1, white }: Props): JSX.Element => {
  const classes = createClasses("heading", styles);
  if (white) classes.addClass("white");
  return React.createElement(
    "h" + level,
    { className: classes.getClasses() },
    children
  );
};

export default Heading;
