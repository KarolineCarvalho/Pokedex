import Button from "@atoms/Button";
import SearchIcon from "@atoms/SearchIcon";
import styles from "./SearchBar.module.scss";

type Props = {};

const SearchBar = (props: Props): JSX.Element => {
  const handleSubmit = () => {
    console.log("search");
  };
  return (
    <form className={styles["searchBar"]} onSubmit={handleSubmit}>
      <div className={styles["searchBar__button"]}>
        <Button type="submit" title="Search">
          <SearchIcon />
        </Button>
      </div>
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
