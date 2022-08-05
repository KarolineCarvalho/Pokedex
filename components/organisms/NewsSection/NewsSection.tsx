import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import NewsItem from "@molecules/newsItem";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NewsSection.module.scss";

export const MOCK_NEWS = [
  {
    id: 1,
    newsImage: "/images/news/pokemon-rumble.jpg",
    imageAlt: "newsImagesImage",
    newsTitle: "Pokémon Rumble Rush Arrives Soon",
    newsDate: "15 May 2019",
  },
  {
    id: 2,
    newsImage: "/images/news/detective-pikachu.jfif",
    imageAlt: "newsImage",
    newsTitle: "Detective Pikachu Sleuths into Pokémon GO",
    newsDate: "19 Sep 2020",
  },
  {
    id: 3,
    newsImage: "/images/news/advanced-battle.png",
    imageAlt: "newsImage",
    newsTitle: "Fight Advanced Battles on Pokémon TV",
    newsDate: "13 Feb 2021",
  },
  {
    id: 4,
    newsImage: "/images/news/masters-ex.jpg",
    imageAlt: "newsImage",
    newsTitle: "Sygna Suit Brendan & Latios in Pokémon Masters EX",
    newsDate: "03 Mar 2021",
  },
  {
    id: 5,
    newsImage: "/images/news/pokemon-presents.jpg",
    imageAlt: "newsImage",
    newsTitle: "An August 2022 Pokémon Presents Is Coming",
    newsDate: "15 Aug 2022",
  },
  {
    id: 6,
    newsImage: "/images/news/pokemon-go.jpg",
    imageAlt: "newsImage",
    newsTitle: "Palkia Pokémon GO Raid Battle Tips",
    newsDate: "15 May 2022",
  },
];

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
        {MOCK_NEWS.map((item) => {
          return (
            <Link href={`/news/${item.id}`} key={item.id}>
              <a>
                <NewsItem
                  newsDate={item.newsDate}
                  newsTitle={item.newsTitle}
                  imageAlt={item.imageAlt}
                  newsImage={item.newsImage}
                />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
export default NewsSection;
