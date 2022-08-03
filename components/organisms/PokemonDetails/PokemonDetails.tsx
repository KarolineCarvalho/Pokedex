import PokeNav from "@molecules/PokeNav";
import AboutTab from "@organisms/AboutTab";
import EvolutionTab from "@organisms/EvolutionTab";
import BaseStatsTab from "@organisms/BaseStatsTab";
import styles from "./PokemonDetails.module.scss";
import MovesTab from "@organisms/MovesTab";

type TabsURL = "about" | "basestats" | "evolution" | "moves";

type Props = {
  current: TabsURL;
  pokemonID: string | undefined;
};

const PokemonDetails = ({ current, pokemonID }: Props) => {
  const tabs = [
    { url: "about" as TabsURL, display: "About", current: "about" === current },
    {
      url: "basestats" as TabsURL,
      display: "Base Stats",
      current: "basestats" === current,
    },
    {
      url: "evolution" as TabsURL,
      display: "Evolution",
      current: "evolution" === current,
    },
    { url: "moves" as TabsURL, display: "Moves", current: "moves" === current },
  ];

  return (
    <div className={styles["pokemonDetails"]}>
      <div className={styles["pokemonDetails__topBackground"]}></div>
      <PokeNav tabs={tabs} currentPokemon={pokemonID || 0} />
      {!!pokemonID && current === "about" && (
        <AboutTab currentPokemon={pokemonID} />
      )}
      {!!pokemonID && current === "basestats" && (
        <BaseStatsTab currentPokemon={pokemonID} />
      )}
      {!!pokemonID && current === "evolution" && (
        <EvolutionTab currentPokemon={pokemonID} />
      )}
      {!!pokemonID && current === "moves" && (
        <MovesTab currentPokemon={pokemonID} />
      )}
    </div>
  );
};

export default PokemonDetails;
