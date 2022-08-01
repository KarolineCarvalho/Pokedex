import Text from "@atoms/Text";
import React from "react";
import styles from "./SizeBox.module.scss";

type Props = {
  height: string;
  weight: string;
};

const SizeBox = ({ weight, height }: Props): JSX.Element => {
  return (
    <div className={styles.sizeBox}>
      <table className={styles.sizeBox__table}>
        <thead>
          <tr>
            <th>
              <Text color="grey" size="medium" weight="normal">
                Height
              </Text>
            </th>
            <th>
              <Text color="grey" size="medium" weight="normal">
                Weight
              </Text>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Text color="grey" size="medium" weight="normal">
                {height}0 cm
              </Text>
            </td>
            <td>
              <Text color="black" size="medium" weight="normal">
                {weight}00 g
              </Text>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SizeBox;
