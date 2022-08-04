import BackArrow from "@molecules/BackArrow";
import ListIcon from "@atoms/ListIcon";
import styles from "./PokedexHeader.module.scss";
import useToggleList from "store/useToggleList";

const PokedexHeader = (): JSX.Element => {
  const toggleListState = useToggleList((state) => state.toggle);

  return (
    <header className={styles.header}>
      <BackArrow href="/" />
      <div className={styles["header__listIcon"]} onClick={toggleListState}>
        <ListIcon />
      </div>
    </header>
  );
};

export default PokedexHeader;
