import createClasses from "@utils/createClasses";
import { useEffect, useState } from "react";
import styles from "./Image.module.scss";

type Props = {
  src: string;
  alt: string;
  bottom?: boolean;
  shadow?: boolean;
  blurLoading?: boolean;
};

const Image = ({
  src,
  alt,
  bottom,
  shadow,
  blurLoading,
}: Props): JSX.Element => {
  const [oldSrc, setSrc] = useState("");
  const [shouldBlur, setShouldBlur] = useState(false);
  let classes = createClasses("image", styles);
  if (bottom) classes.addClass("bottom");
  if (shadow) classes.addClass("shadow");
  if (shouldBlur) classes.addClass("blurLoading");
  useEffect(() => {
    if (src !== oldSrc && blurLoading) {
      setShouldBlur(true);
      setSrc(src);
    }
  }, [oldSrc, src, blurLoading]);
  return (
    <picture>
      <source type="image/webp" src={"src"} />
      <img
        src={src}
        alt={alt}
        className={classes.getClasses()}
        onAnimationEnd={() => setShouldBlur(false)}
      />
    </picture>
  );
};

export default Image;
