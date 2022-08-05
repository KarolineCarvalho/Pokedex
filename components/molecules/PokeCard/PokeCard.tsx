import PokeballIcon from "@atoms/PokeballIcon";
import Text from "@atoms/Text";
import Image from "@molecules/Image";
import TypeBox from "@molecules/TypeBox";
import createClasses from "@utils/createClasses";
import Pokemon from "models/Pokemon";
import useToggleList from "store/useToggleList";
import styles from "./PokeCard.module.scss";

type Props = {
  pokemon: Pick<Pokemon, "id" | "name" | "types" | "sprite">;
};

const PokeCard = ({ pokemon }: Props) => {
  const listState = useToggleList((state) => state.listView);
  const { id, name, types, sprite } = pokemon;
  const cardClasses = createClasses("pokeCard", styles);

  types.length > 0 && types[0] !== "normal"
    ? cardClasses.addClass("type--" + types[0])
    : cardClasses.addClass("type--" + types[1]);

  if (listState) {
    cardClasses.addClass("singleColumn");
  }

  const listVwModifier = !listState ? "" : "--singleColumn";

  return (
    <>
      {!listState ? (
        <div className={cardClasses.getClasses()}>
          <div className={cardClasses.getElement("id")}>
            <Text color="white" size="medium" weight="normal">
              #{id.toString().padStart(3, "0")}
            </Text>
          </div>
          <div className={cardClasses.getElement("name")}>
            <Text color="white" size="medium" weight="normal">
              {name}
            </Text>
          </div>
          <div className={cardClasses.getElement("types")}>
            {types.map((type) => (
              <TypeBox key={type} type={type} />
            ))}
          </div>
          <div className={cardClasses.getElement("sprite")}>
            <Image src={sprite} alt={name} />
          </div>
          <div className={cardClasses.getElement("background")}>
            <PokeballIcon />
          </div>
        </div>
      ) : (
        <div className={cardClasses.getClasses()}>
          <div className={cardClasses.getElement(`id${listVwModifier}`)}>
            <Text color="white" size="medium" weight="normal">
              #{id.toString().padStart(3, "0")}
            </Text>
          </div>
          <div className={cardClasses.getElement(`name${listVwModifier}`)}>
            <Text color="white" size="medium" weight="normal">
              {name}
            </Text>
          </div>
          <div className={cardClasses.getElement(`types${listVwModifier}`)}>
            {types.map((type) => (
              <TypeBox key={type} type={type} />
            ))}
          </div>

          <div
            className={cardClasses.getElement(`background${listVwModifier}`)}
          >
            <PokeballIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default PokeCard;
