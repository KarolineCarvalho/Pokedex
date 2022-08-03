import Heading from "@atoms/Heading";
import SkeletonBox from "@atoms/SkeletonBox";
import Text from "@atoms/Text";
import Image from "@molecules/Image";
import styles from "./NewsItem.module.scss";

const NewsItem = (): JSX.Element => {
  return (
    <div className={styles.newsItem}>
      <div className={styles["newsItem__title"]}>
        <Text size="large" weight="normal" color="black">
          Pokémon Rumble Rush Arrives Soon
        </Text>
      </div>
      <div className={styles["newsItem__date"]}>
        <Text size="medium" weight="normal" color="grey">
          15 May 2019
        </Text>
      </div>

      <div className={styles["newsItem__img"]}>
        <SkeletonBox />
      </div>
    </div>
  );
};
export default NewsItem;
