import type { NextPage } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";

import styles from "styles/News.module.scss";
import BackArrow from "@molecules/BackArrow";
import SkeletonBox from "@atoms/SkeletonBox";
import Image from "@molecules/Image";

const NewsSection: NextPage = () => {
  const router = useRouter();
  const { news } = router.query;
  return (
    <div className={styles.news}>
      <Head>
        <title>News - blabla</title>
      </Head>

      <BackArrow href="/" />

      <div className={styles.news__img}>
        <SkeletonBox />
      </div>

      <Heading>Pokemon Rumble Rush Arrives Soon</Heading>
      <Text size="large" weight="normal" color="grey">
        15 May 2019
      </Text>
      <div className={styles.news__content}>
        <Text size="large" weight="normal" color="grey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in nisi
          at turpis faucibus maximus eget vel augue. Duis vel lorem eu ligula
          sollicitudin accumsan a at turpis.
        </Text>
      </div>
      <div className={styles.news__img}>
        <Image src="/images/news/newsContentImg.png" />
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
