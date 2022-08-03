import PokeNavItem from "@molecules/PokeNavItem";
import Link from "next/link";
import styles from "./PokeNav.module.scss";

type Props = {
  tabs: {
    url: "about" | "basestats" | "evolution" | "moves";
    display: string;
    current: boolean;
  }[];
  currentPokemon: string | number;
};

const PokeNav = ({ tabs, currentPokemon }: Props) => {
  return (
    <>
      <ul className={styles.pokeNav}>
        {tabs.map((tab) => (
          <li key={tab.url}>
            <Link href={`/pokemon/${currentPokemon}/${tab.url}`}>
              <a>
                <PokeNavItem active={tab.current}>{tab.display}</PokeNavItem>
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.pokeNav__bar}></div>
    </>
  );
};

export default PokeNav;
