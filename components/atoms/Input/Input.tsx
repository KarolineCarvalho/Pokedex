import React from "react";
import styles from "./Input.module.scss";

type Props = {
  name: string;
  type: string;
  placeholder?: string;
};

const Input = (props: Props) => {
  return <input {...props} className={styles.input} />;
};

export default Input;
