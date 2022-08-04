import Heading from "@atoms/Heading";
import SkeletonBox from "@atoms/SkeletonBox";
import Text from "@atoms/Text";
import Image from "@molecules/Image";
import styles from "./NewsItem.module.scss";

type Props = {
  newsTitle: string;
  newsDate: string;
  newsImage: string;
  imageAlt: string;
};

const NewsItem = ({
  newsTitle,
  newsDate,
  newsImage,
  imageAlt,
}: Props): JSX.Element => {
  console.log(newsImage);
  return (
    <div className={styles.newsItem}>
      <div className={styles["newsItem__title"]}>
        <Text size="large" weight="normal" color="black">
          {newsTitle}
        </Text>
      </div>
      <div className={styles["newsItem__date"]}>
        <Text size="medium" weight="normal" color="grey">
          {newsDate}
        </Text>
      </div>

      <div className={styles["newsItem__img"]}>
        {newsImage === "" ? (
          <SkeletonBox />
        ) : (
          <Image src={newsImage} alt={imageAlt} />
        )}
      </div>
    </div>
  );
};
export default NewsItem;
