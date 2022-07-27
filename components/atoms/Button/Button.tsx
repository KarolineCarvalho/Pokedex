import React from "react";
import styles from "./Button.module.scss";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
  type: "button" | "submit" | "reset";
  title: string;
};

const Button = ({ children, type, title }: Props) => {
  return (
    <button className={styles.button} type={type} title={title}>
      {children}
    </button>
  );
};

export default Button;
