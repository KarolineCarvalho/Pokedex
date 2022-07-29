import BackArrow from "@atoms/BackArrow";
import ListIcon from "@atoms/ListIcon";
import styles from "./PokedexHeader.module.scss";

const PokedexHeader = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <BackArrow />
      <div className={styles["header__listIcon"]}>
        <ListIcon />
      </div>
    </header>
  );
};

export default PokedexHeader;
