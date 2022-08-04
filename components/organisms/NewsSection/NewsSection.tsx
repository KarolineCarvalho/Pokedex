import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import NewsItem from "@molecules/newsItem";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./NewsSection.module.scss";

const MOCK_NEWS = [
  {
    id: 1,
    newsImage:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-rumble-rush/pokemon-rumble-rush-169.jpg",
    imageAlt: "newsImagesImage",
    newsTitle: "Pokémon Rumble Rush Arrives Soon",
    newsDate: "15 May 2019",
  },
  {
    id: 2,
    newsImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukoSdWqy--DeoU5UvlSlbSsS9A0dt2f5RiQ&usqp=CAU",
    imageAlt: "newsImage",
    newsTitle: "Detective Pikachu Sleuths into Pokémon GO",
    newsDate: "19 Sep 2020",
  },
  {
    id: 3,
    newsImage:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/watch-pokemon-tv/_tiles/season08/season08-on-ptv-announce-169-en.png",
    imageAlt: "newsImage",
    newsTitle: "Fight Advanced Battles on Pokémon TV",
    newsDate: "13 Feb 2021",
  },
  {
    id: 4,
    newsImage:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-masters/08012022/pokemon-masters-ex-169.jpg",
    imageAlt: "newsImage",
    newsTitle: "Sygna Suit Brendan & Latios in Pokémon Masters EX",
    newsDate: "03 Mar 2021",
  },
  {
    id: 5,
    newsImage:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/pokemon-presents/08032022/pokemon-presents-169-us.jpg",
    imageAlt: "newsImage",
    newsTitle: "An August 2022 Pokémon Presents Is Coming",
    newsDate: "15 Aug 2022",
  },
  {
    id: 6,
    newsImage:
      "https://www.pokemon.com/static-assets/content-assets/cms2/img/video-games/_tiles/strategy/go/palkia/pokemon-go-169.jpg",
    imageAlt: "newsImage",
    newsTitle: "Palkia Pokémon GO Raid Battle Tips",
    newsDate: "15 May 2022",
  },
];
console.log(MOCK_NEWS);

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
