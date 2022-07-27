import PokeballIcon from "@atoms/PokeballIcon";
import Text from "@atoms/Text";
import createClasses from "@utils/createClasses";
import styles from "./MenuCard.module.scss";

type Props = {
  color: "green" | "red" | "blue" | "yellow" | "purple" | "brown";
  children: React.ReactNode[] | React.ReactNode;
};

const MenuCard = ({ color, children }: Props): JSX.Element => {
  const classes = createClasses("menuCard", styles);
  classes.addClass(`${color}`);
  return (
    <div className={classes.getClasses()}>
      <div
        className={`${styles["menuCard__pokeball"]} ${styles["menuCard__pokeball--top"]}`}
      >
        <PokeballIcon />
      </div>

      <div className={styles.menuCard__txt}>
        <Text size="medium" color="white" weight="bold">
          {children}
        </Text>
      </div>

      <div className={styles.menuCard__pokeball}>
        <PokeballIcon />
      </div>
    </div>
  );
};
export default MenuCard;
