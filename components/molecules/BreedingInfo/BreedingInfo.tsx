import GenderIcon from "@atoms/GenderIcon";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import { captilizeFirstLetter } from "@utils/stringUtils";
import React, { useId } from "react";
import styles from "./BreedingInfo.module.scss";

type Props = {
  eggGroups: { name: string }[];
};

const BreedingInfo = ({ eggGroups }: Props) => {
  const headingId = useId();
  return (
    <section aria-labelledby={headingId}>
      <Heading id={headingId} level={3}>
        Breeding Info
      </Heading>
      <div className={styles["breedingInfo__infoGroup"]}>
        <Text weight="normal" color="grey" size="medium">
          Gender
        </Text>
        <Text weight="normal" color="black" size="medium">
          <div className={styles["breedingInfo__genders"]}>
            <div>
              <div className={styles["breedingInfo__icon"]}>
                <GenderIcon gender="male" color="#6C79DB" />
              </div>
              {"   "}
              87.5%
            </div>
            <div>
              <div className={styles["breedingInfo__icon"]}>
                <GenderIcon gender="female" color="#F0729F" />
              </div>
              {"   "}
              12.5%
            </div>
          </div>
        </Text>
        <Text weight="normal" color="grey" size="medium">
          Egg Groups
        </Text>
        <Text weight="normal" color="black" size="medium">
          {eggGroups
            .map((group) => captilizeFirstLetter(group.name))
            .join(", ")}
        </Text>
      </div>
    </section>
  );
};

export default BreedingInfo;
