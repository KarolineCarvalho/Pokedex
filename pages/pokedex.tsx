import BackArrow from "@atoms/BackArrow";
import Text from "@atoms/Text";
import type { NextPage } from "next";

const Pokedex: NextPage = () => {
  return (
    <div>
      <BackArrow />
      <Text color="grey" size="large" weight="normal">
        Teste
      </Text>
    </div>
  );
};

export default Pokedex;
