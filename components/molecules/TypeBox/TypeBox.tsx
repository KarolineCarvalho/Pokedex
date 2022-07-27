import Text from "@atoms/Text";
import PokemonType from "types/PokemonTypes";
import styles from "./TypeBox.module.scss";

type Props = {
  type: PokemonType;
};

const TypeBox = ({ type }: Props): JSX.Element => {
  return (
    <div className={styles.typeBox}>
      <div className={styles[`typeBox__background`]}></div>
      <Text color="white" size="small" weight="normal">
        {type}
      </Text>
    </div>
  );
};

export default TypeBox;
