import React from "react";
import { useRouter } from "next/router";
import styles from "./BackArrow.module.scss";

const BackArrow = () => {
  const router = useRouter();

  return (
    <button
      className={styles.backArrow}
      type="button"
      onClick={() => router.back()}
    >
      ←
    </button>
  );
};

export default BackArrow;
