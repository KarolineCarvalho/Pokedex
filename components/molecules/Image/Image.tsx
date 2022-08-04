import createClasses from "@utils/createClasses";
import { useEffect, useState } from "react";
import styles from "./Image.module.scss";

type Props = {
  src: string;
  alt: string;
  bottom?: boolean;
  shadow?: boolean;
  blurLoading?: boolean;
  blur?: boolean;
};

const Image = ({
  src,
  alt,
  bottom,
  shadow,
  blurLoading,
  blur,
}: Props): JSX.Element => {
  const [oldSrc, setSrc] = useState("");
  const [shouldBlur, setShouldBlur] = useState(false);
  let classes = createClasses("image", styles);
  if (bottom) classes.addClass("bottom");
  if (shadow) classes.addClass("shadow");
  if (blur) classes.addClass("blur");
  if (shouldBlur && !blur) classes.addClass("blurLoading");
  useEffect(() => {
    if (src !== oldSrc && blurLoading) {
      setShouldBlur(true);
      setSrc(src);
    }
  }, [oldSrc, src, blurLoading]);
  const displaySrc = blurLoading && src !== oldSrc ? oldSrc : src;
  return (
    <picture>
      <source type="image/webp" src={displaySrc} />
      <img
        src={displaySrc}
        alt={alt}
        className={classes.getClasses()}
        onAnimationEnd={() => setShouldBlur(false)}
      />
    </picture>
  );
};

export default Image;
