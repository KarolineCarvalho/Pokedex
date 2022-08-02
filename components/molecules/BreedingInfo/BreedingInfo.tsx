import GenderIcon from "@atoms/GenderIcon";
import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import { captilizeFirstLetter } from "@utils/stringUtils";
import React, { useId } from "react";
import styles from "./BreedingInfo.module.scss";
import { getGenderRatio } from "./utils/getGenderRatio";

type Props = {
  eggGroups: { name: string }[];
  gender_ratio: number;
};

const BreedingInfo = ({ eggGroups, gender_ratio }: Props) => {
  const headingId = useId();
  const ratio = getGenderRatio(gender_ratio);
  return (
    <section aria-labelledby={headingId}>
      <Heading id={headingId} level={3}>
        Breeding
      </Heading>
      <div className={styles["breedingInfo__infoGroup"]}>
        <Text weight="normal" color="grey" size="medium">
          Gender
        </Text>
        <Text weight="normal" color="black" size="medium">
          {ratio === "unknown" ? (
            <>
              <div className={styles["breedingInfo__icon"]}>
                <GenderIcon gender="unknown" color="black" />
              </div>
              {"   "}unknown
            </>
          ) : (
            <div className={styles["breedingInfo__genders"]}>
              <div>
                <div className={styles["breedingInfo__icon"]}>
                  <GenderIcon gender="male" color="#6C79DB" />
                </div>
                {"   "}
                {ratio.male}%
              </div>
              <div>
                <div className={styles["breedingInfo__icon"]}>
                  <GenderIcon gender="female" color="#F0729F" />
                </div>
                {"   "}
                {ratio.female}%
              </div>
            </div>
          )}
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
