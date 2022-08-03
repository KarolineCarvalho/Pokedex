import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import NewsItem from "@molecules/newsItem";
import styles from "./NewsSection.module.scss";

const NewsSection = (): JSX.Element => {
  return (
    <section className={styles.news}>
      <div className={styles["news__header"]}>
        <Heading>Pokémon News</Heading>
        <Text size="large" weight="normal" color="black">
          View All
        </Text>
      </div>
      <div className={styles["news__container"]}>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </section>
  );
};
export default NewsSection;
