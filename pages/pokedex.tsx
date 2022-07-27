import BackArrow from "@atoms/BackArrow";
import Grid from "@atoms/Grid";
import Text from "@atoms/Text";
import SkeletonBox from "@atoms/SkeletonBox";
import type { NextPage } from "next";

const Pokedex: NextPage = () => {
  return (
    <div>
      <BackArrow />
      <Text color="grey" size="large" weight="normal">
        Teste
      </Text>

      <Grid type="pokedex">
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
        <SkeletonBox />
      </Grid>
    </div>
  );
};

export default Pokedex;
