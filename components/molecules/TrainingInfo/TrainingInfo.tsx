import Heading from "@atoms/Heading";
import Text from "@atoms/Text";
import React, { useId } from "react";
import styles from "./TrainingInfo.module.scss";

type Props = {
  baseXP: number | string;
};

const TrainingInfo = ({ baseXP }: Props) => {
  const headingId = useId();
  return (
    <section aria-labelledby={headingId}>
      <Heading id={headingId} level={3}>
        Training
      </Heading>
      <div className={styles["trainingInfo__infoGroup"]}>
        <Text weight="normal" color="grey" size="medium">
          BaseEXP
        </Text>
        <Text weight="normal" color="black" size="medium">
          {baseXP}
        </Text>
      </div>
    </section>
  );
};

export default TrainingInfo;
