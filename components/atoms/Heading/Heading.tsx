import createClasses from "@utils/createClasses";
import React from "react";
import styles from "./Heading.module.scss";

type Props = {
  level?: number;
  children: React.ReactNode[] | React.ReactNode;
  white?: boolean;
  id?: string;
};

const Heading = ({ children, level = 1, white, id }: Props): JSX.Element => {
  const classes = createClasses("heading", styles);
  if (white) classes.addClass("white");
  let props: any = { className: classes.getClasses() };
  if (id) props = { ...props, id: id };
  return React.createElement("h" + level, props, children);
};

export default Heading;
