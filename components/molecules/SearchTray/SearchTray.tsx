import SearchBar from "@molecules/SearchBar";
import styles from "./SearchTray.module.scss";

type Props = {
  onSearch: () => void;
};

const SearchTray = ({ onSearch: handleSearch }: Props): JSX.Element => {
  return (
    <div className={styles["searchTray"]}>
      <SearchBar onSearch={handleSearch} />
    </div>
  );
};

export default SearchTray;
