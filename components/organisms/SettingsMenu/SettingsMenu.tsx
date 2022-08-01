import HeartIcon from "@atoms/HeartIcon";
import PokeballIcon from "@atoms/PokeballIcon";
import SearchIcon from "@atoms/SearchIcon";
import SettingsButton from "@molecules/SettingsButton";
import SettingsItem from "@molecules/SettingsItem";
import React, { useState } from "react";
import styles from "./SettingsMenu.module.scss";

const SettingsMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleSearch = () => {
    console.log("handleSearch");
  };
  return (
    <div>
      {isOpen && <div className={styles[`settingsMenu__backdrop`]}></div>}
      {isOpen && (
        <div className={styles[`settingsMenu__items`]}>
          <SettingsItem
            text="Favorite Pokemon"
            icon={<HeartIcon color="#6C79DB" />}
            onClick={handleSearch}
          />
          <SettingsItem
            text="All Type"
            icon={<PokeballIcon color="#6C79DB" opacity="solid" />}
            onClick={handleSearch}
          />
          <SettingsItem
            text="All Gen"
            icon={<PokeballIcon color="#6C79DB" opacity="solid" />}
            onClick={handleSearch}
          />
          <SettingsItem
            text="Search"
            icon={<SearchIcon color="#6C79DB" />}
            onClick={handleSearch}
          />
        </div>
      )}
      <SettingsButton
        isOpen={isOpen}
        onClick={() => setIsOpen((state) => !state)}
      />
    </div>
  );
};

export default SettingsMenu;
