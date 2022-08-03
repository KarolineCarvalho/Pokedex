import Image from "@molecules/Image";
import useSinglePokemon from "hooks/useSinglePokemon";
import Link from "next/link";
import React from "react";

type Props = {
  pokemonId: number;
};

const ShadowPokemon = ({ pokemonId }: Props): JSX.Element => {
  const { pokemon } = useSinglePokemon(`pokemon/${pokemonId}`);

  return (
    <>
      {pokemon && (
        <Link href={`/pokemon/${pokemonId}`}>
          <a>
            <Image
              src={pokemon.sprites.other["official-artwork"]["front_default"]}
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
