import Button from "@atoms/Button";
import Input from "@atoms/Input";
import SearchIcon from "@atoms/SearchIcon";
import styles from "./SearchBar.module.scss";
import { useRouter } from "next/router";
import { FormEvent } from "react";

type Props = {
  onSearch?: () => void;
};

const SearchBar = ({ onSearch }: Props): JSX.Element => {
  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = new FormData(e.currentTarget).get("search");
    if (search) router.push("/pokedex?search=" + search);
    if (onSearch) onSearch();
  };
  return (
    <form className={styles["searchBar"]} onSubmit={handleSubmit}>
      <div className={styles["searchBar__button"]}>
        <Button type="submit" title="Search">
          <SearchIcon />
        </Button>
      </div>
      <Input
        type="search"
        name="search"
        placeholder="Search Pokemon, Type, Ability etc"
      />
    </form>
  );
};

export default SearchBar;
