import PokeballIcon from "@atoms/PokeballIcon";
import React from "react";
import styles from "./MainLayout.module.scss";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.mainLayout}>
      <div className={styles["mainLayout__background"]}>
        <PokeballIcon color="#303943" />
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
