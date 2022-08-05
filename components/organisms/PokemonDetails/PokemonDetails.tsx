import PokeNav from "@molecules/PokeNav";
import AboutTab from "@organisms/AboutTab";
import EvolutionTab from "@organisms/EvolutionTab";
import BaseStatsTab from "@organisms/BaseStatsTab";
import styles from "./PokemonDetails.module.scss";
import MovesTab from "@organisms/MovesTab";
import Page from "@models/Pages";

type Props = {
  current: Page;
  pokemonID: string | undefined;
};

const PokemonDetails = ({ current, pokemonID }: Props) => {
  const tabs = [
    { url: "about" as Page, display: "About", current: "about" === current },
    {
      url: "basestats" as Page,
      display: "Base Stats",
      current: "basestats" === current,
    },
    {
      url: "evolution" as Page,
      display: "Evolution",
      current: "evolution" === current,
    },
    { url: "moves" as Page, display: "Moves", current: "moves" === current },
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
