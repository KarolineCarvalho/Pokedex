import Text from "@atoms/Text";
import React from "react";
import styles from "./SettingsItem.module.scss";

type Props = {
  onClick: (event: React.MouseEvent) => void;
  text: string;
  icon: React.ReactNode;
};

const SettingsItem = ({ onClick: handleClick, text, icon }: Props) => {
  return (
    <button type="button" onClick={handleClick} className={styles.settingsItem}>
      <Text color="black" size="medium" weight="normal">
        {text}
      </Text>
      <div className={styles[`settingsItem__icon`]}>{icon}</div>
    </button>
  );
};

export default SettingsItem;
