import { useState } from "react";

export default function ToggleFavorite(item: string) {
  const [favorite, setFavorite] = useState();

  const isLiked = localStorage.getItem(item);
  if (isLiked === null) {
    localStorage.setItem(item, "true");
    setFavorite(true);
    console.log(favorite);
  }
  if (isLiked === "true") {
    localStorage.removeItem(item);
    setFavorite(false);
    console.log(favorite);
  }

  return favorite;
}
