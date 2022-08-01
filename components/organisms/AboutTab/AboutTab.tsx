import styles from "./AboutTab.module.scss";

type Props = {
  currentPokemon: string;
};

const AboutTab = ({ currentPokemon }: Props) => {
  return <div className={styles.aboutTab}>AboutAbout</div>;
};

export default AboutTab;
