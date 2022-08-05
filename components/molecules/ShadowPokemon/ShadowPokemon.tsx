import Image from "@molecules/Image";
import useSinglePokemon from "hooks/useSinglePokemon";
import Link from "next/link";
import React from "react";

type Props = {
  pokemonId: number;
  page: "about" | "moves" | "evolution" | "basestats";
};

const ShadowPokemon = ({ pokemonId, page }: Props): JSX.Element => {
  const { pokemon } = useSinglePokemon(`pokemon/${pokemonId}`, pokemonId !== 0);

  return (
    <>
      {pokemon && (
        <Link href={`/pokemon/${pokemonId}/${page}`}>
          <a>
            <Image
              src={
                pokemon.sprites.other["official-artwork"]["front_default"] ||
                "/images/question-mark.png"
              }
              alt={pokemon.name}
              shadow
            />
          </a>
        </Link>
      )}
    </>
  );
};

export default ShadowPokemon;
