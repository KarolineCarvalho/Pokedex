import Text from "@atoms/Text";
import useSinglePokemon from "hooks/useSinglePokemon";
import React from "react";
import styles from "./MovesTab.module.scss";

type Props = {
  currentPokemon: string | number;
};

const MovesTab = ({ currentPokemon }: Props): JSX.Element => {
  const { pokemon } = useSinglePokemon(`pokemon/${currentPokemon}`);

  const moves = pokemon?.moves.sort((a: any, b: any) =>
    (a.version_group_details[0].level_learned_at !== 0
      ? a.version_group_details[0].level_learned_at
      : a.version_group_details[0].move_learn_method.name
    )
      .toString()
      .localeCompare(
        (b.version_group_details[0].level_learned_at !== 0
          ? b.version_group_details[0].level_learned_at
          : b.version_group_details[0].move_learn_method.name
        ).toString(),
        undefined,
        { numeric: true, sensitivity: "base" }
      )
  );

  return (
    <div className={styles.movesTab}>
      {pokemon &&
        moves.map((move: any) => (
          <React.Fragment key={move.move.name}>
            <Text color="black" size="medium" weight="bold">
              {move.version_group_details[0].level_learned_at !== 0
                ? move.version_group_details[0].level_learned_at
                : move.version_group_details[0].move_learn_method.name}
            </Text>
            <Text color="black" size="medium" weight="bold">
              {move.move.name}
            </Text>
          </React.Fragment>
        ))}
    </div>
  );
};

export default MovesTab;
