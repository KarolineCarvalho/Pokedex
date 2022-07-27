import SearchIcon from "@atoms/SearchIcon";
import styles from "./SearchBar.module.scss";

type Props = {};

const SearchBar = (props: Props): JSX.Element => {
  const handleSubmit = () => {
    console.log("search");
  };
  return (
    <form className={styles["searchBar"]} onSubmit={handleSubmit}>
      <button
        type="submit"
        title="Search"
        className={styles["searchBar__button"]}
      >
        <SearchIcon />
      </button>
      <input
        type="search"
        name="search"
        placeholder="Search Pokemon, Move, Ability etc"
        className={styles["searchBar__input"]}
      />
    </form>
  );
};

export default SearchBar;
