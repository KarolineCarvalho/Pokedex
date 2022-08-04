import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";

import styles from "styles/News.module.scss";
import BackArrow from "@molecules/BackArrow";
import SkeletonBox from "@atoms/SkeletonBox";
import Image from "@molecules/Image";
import { MOCK_NEWS } from "@organisms/NewsSection/NewsSection";

const NewsSection: NextPage = () => {
  const router = useRouter();
  const { news } = router.query;
  const id = parseInt(news + "") - 1;

  const newsData = {
    img: MOCK_NEWS[id].newsImage,
    title: MOCK_NEWS[id].newsTitle,
    date: MOCK_NEWS[id].newsDate,
  };

  return (
    <div className={styles.news}>
      <Head>
        <title>News - {newsData.title}</title>
      </Head>

      <BackArrow href="/" />

      <div className={styles.news__img}>
        <Image src={newsData.img} alt="newsContent" />
      </div>

      <Heading>{newsData.title}</Heading>
      <Text size="large" weight="normal" color="grey">
        {newsData.date}
      </Text>
      <div className={styles.news__content}>
        <Text size="large" weight="normal" color="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi
          at turpis faucibus maximus eget vel augue. Duis vel lorem eu ligula
          sollicitudin accumsan a at turpis.
        </Text>
      </div>
      <div className={styles.news__img}>
        <Image src="/images/news/newsContentImg.png" alt="newsContent" />
      </div>
      <div className={styles.news__content}>
        <Text size="large" weight="normal" color="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi
          at turpis faucibus maximus eget vel augue. Duis vel lorem eu ligula
          sollicitudin accumsan a at turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla in nisi at turpis faucibus maximus
          eget vel augue. Duis vel lorem eu ligula sollicitudin accumsan a at
          turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          in nisi at turpis faucibus maximus eget vel augue. Duis vel lorem eu
          ligula sollicitudin accumsan a at turpis.
        </Text>
      </div>
      <div className={styles.news__content}>
        <Text size="large" weight="normal" color="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi
          at turpis faucibus maximus eget vel augue. Duis vel lorem eu ligula
          sollicitudin accumsan a at turpis. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nulla in nisi at turpis faucibus maximus
          eget vel augue. Duis vel lorem eu ligula sollicitudin accumsan a at
          turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          in nisi at turpis faucibus maximus eget vel augue. Duis vel lorem eu
          ligula sollicitudin accumsan a at turpis.
        </Text>
      </div>
    </div>
  );
};

export default NewsSection;
