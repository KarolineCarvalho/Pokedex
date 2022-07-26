import styles from "./Image.module.scss";

type Props = {
  src: string;
  alt: string;
};

const Image = ({ src, alt }: Props): JSX.Element => {
  return (
    <picture>
      <source type="image/webp" src={src} />
      <img src={src} alt={alt} className={styles.image} />
    </picture>
  );
};

export default Image;
