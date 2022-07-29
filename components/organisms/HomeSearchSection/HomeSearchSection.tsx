import Heading from "@atoms/Heading";
import SearchBar from "@molecules/SearchBar";
import React from "react";
import styles from "./HomeSearchSection.module.scss";

const HomeSearchSection = (): JSX.Element => {
  return (
    <section aria-label="Search bar" className={styles.searchSection}>
      <Heading>What Pokemon are you looking for?</Heading>
      <SearchBar />
    </section>
  );
};

export default HomeSearchSection;
