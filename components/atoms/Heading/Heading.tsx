import React from "react";

type Props = {
  level?: number;
  children: React.ReactNode[];
};

const Heading = ({ children, level = 1 }: Props): JSX.Element => {
  return React.createElement("h" + level, {}, children);
};

export default Heading;
