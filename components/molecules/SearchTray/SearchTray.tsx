import SearchBar from "@molecules/SearchBar";
import styles from "./SearchTray.module.scss";

type Props = {
  onSearch: () => void;
};

const SearchTray = ({ onSearch: handleSearch }: Props): JSX.Element => {
  return (
    <div className={styles["searchTray"]}>
      <div className={styles["searchTray__decorativeRectangle"]}></div>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchTray;
