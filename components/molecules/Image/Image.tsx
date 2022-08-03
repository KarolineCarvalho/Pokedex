import createClasses from "@utils/createClasses";
import styles from "./Image.module.scss";

type Props = {
  src: string;
  alt: string;
  bottom?: boolean;
  shadow?: boolean;
};

const Image = ({ src, alt, bottom, shadow }: Props): JSX.Element => {
  let classes = createClasses("image", styles);
  if (bottom) classes.addClass("bottom");
  if (shadow) classes.addClass("shadow");
  return (
    <picture>
      <source type="image/webp" src={src} />
      <img src={src} alt={alt} className={classes.getClasses()} />
    </picture>
  );
};

export default Image;
