import PokeballIcon from "@atoms/PokeballIcon";
import Text from "@atoms/Text";
import Image from "@molecules/Image";
import TypeBox from "@molecules/TypeBox";
import createClasses from "@utils/createClasses";
import Pokemon from "models/Pokemon";
import React from "react";
import styles from "./PokeCard.module.scss";

type Props = {
  pokemon: Pick<Pokemon, "id" | "name" | "types" | "sprite">;
};

const PokeCard = ({ pokemon }: Props) => {
  const { id, name, types, sprite } = pokemon;
  const cardClasses = createClasses("pokeCard", styles);

  types.length < 2 || types[0].toLowerCase() !== "normal"
    ? cardClasses.addClass("type--" + types[0].toLowerCase())
    : cardClasses.addClass("type--" + types[1].toLowerCase());
  return (
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
  );
};

export default React.memo(PokeCard);
