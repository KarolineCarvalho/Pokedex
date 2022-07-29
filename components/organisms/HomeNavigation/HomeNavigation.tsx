import Grid from "@molecules/Grid";
import MenuCard from "@molecules/MenuCard";
import Link from "next/link";

const HomeNavigation = () => {
  return (
    <section aria-label="Navigation">
      <nav>
        <Grid type="home">
          <Link href="/pokedex">
            <a>
              <MenuCard color="green">Pokedex</MenuCard>
            </a>
          </Link>
          <Link href="/">
            <a>
              <MenuCard color="red">Moves</MenuCard>
            </a>
          </Link>
          <Link href="/">
            <a>
              <MenuCard color="blue">Abilities</MenuCard>
            </a>
          </Link>
          <Link href="/">
            <a>
              <MenuCard color="yellow">Items</MenuCard>
            </a>
          </Link>
          <Link href="/">
            <a>
              <MenuCard color="purple">Locations</MenuCard>
            </a>
          </Link>
          <Link href="/">
            <a>
              <MenuCard color="brown">Type Charts</MenuCard>
            </a>
          </Link>
        </Grid>
      </nav>
    </section>
  );
};

export default HomeNavigation;
