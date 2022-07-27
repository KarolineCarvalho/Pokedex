import BackArrow from "@atoms/BackArrow";
import Grid from "@atoms/Grid";
import Text from "@atoms/Text";
import type { NextPage } from "next";
import MenuCard from "@molecules/MenuCard";
import MainLayout from "@templates/MainLayout";

const Pokedex: NextPage = () => {
  return (
    <div>
      <MainLayout>
        <BackArrow />
        <Text color="grey" size="large" weight="normal">
          Teste
        </Text>
        <Grid type="home">
          <MenuCard color="green">Pokedex</MenuCard>
          <MenuCard color="red">Moves</MenuCard>
          <MenuCard color="blue">Abilities</MenuCard>
          <MenuCard color="yellow">Items</MenuCard>
          <MenuCard color="purple">Locations</MenuCard>
          <MenuCard color="brown">Type Charts</MenuCard>
        </Grid>
      </MainLayout>
    </div>
  );
};

export default Pokedex;
