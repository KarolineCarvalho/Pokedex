import createClasses from "@utils/createClasses";
import styles from "./Image.module.scss";

type Props = {
  src: string;
  alt: string;
  bottom?: boolean;
};

const Image = ({ src, alt, bottom }: Props): JSX.Element => {
  let classes = `${styles.image}`;
  if (bottom) classes += ` ${styles.image__bottom}`;
  return (
    <picture>
      <source type="image/webp" src={src} />
      <img src={src} alt={alt} className={classes} />
    </picture>
  );
};

export default Image;
