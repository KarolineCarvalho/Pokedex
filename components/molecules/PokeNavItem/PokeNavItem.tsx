import Text from "@atoms/Text";
import styles from "./PokeNavItem.module.scss";

type Props = {
  active?: boolean;
  children: string;
};

const PokeNavItem = ({ active = false, children }: Props) => {
  return (
    <div className={styles.pokeNavItem}>
      <Text weight="normal" color={active ? "black" : "grey"} size="medium">
        {children}
      </Text>
      {active && <div className={styles["pokeNavItem__bar"]}></div>}
    </div>
  );
};

export default PokeNavItem;
