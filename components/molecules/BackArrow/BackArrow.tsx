import React from "react";
import styles from "./BackArrow.module.scss";
import Link from "next/link";

type Props = {
  href: string;
};

const BackArrow = ({ href }: Props): JSX.Element => {
  return (
    <Link href={href}>
      <a className={styles.backArrow} title="Go Back">
        ←
      </a>
    </Link>
  );
};

export default BackArrow;
