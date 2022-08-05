import ClientOnlyPortal from "@atoms/ClientOnlyPortal";
import HeartIcon from "@atoms/HeartIcon";
import PokeballIcon from "@atoms/PokeballIcon";
import SearchIcon from "@atoms/SearchIcon";
import SearchTray from "@molecules/SearchTray";
import SettingsButton from "@molecules/SettingsButton";
import SettingsItem from "@molecules/SettingsItem";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "./SettingsMenu.module.scss";

const SettingsMenu = () => {
  const [state, setState] = useState<"closed" | "open" | "tray">("closed");
  const router = useRouter();
  const handleSearch = () => {
    setState("tray");
  };

  const goToFavorites = () => {
    router.push("/pokedex/favorites");
  };

  const handleExit = () => setState("closed");

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setState("closed");
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  });

  return (
    <div>
      {state !== "closed" && (
        <ClientOnlyPortal selector="#backdrop">
          <div
            className={styles[`settingsMenu__backdrop`]}
            onClick={handleExit}
          ></div>
        </ClientOnlyPortal>
      )}
      {state === "open" && (
        <div className={styles[`settingsMenu__items`]}>
          <SettingsItem
            text="Favorite Pokemon"
            icon={<HeartIcon color="#6C79DB" filled />}
            onClick={goToFavorites}
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
      {state !== "tray" && (
        <SettingsButton
          isOpen={state === "open"}
          onClick={() => setState(state === "closed" ? "open" : "closed")}
        />
      )}
      {state === "tray" && <SearchTray onSearch={() => setState("closed")} />}
    </div>
  );
};

export default SettingsMenu;
