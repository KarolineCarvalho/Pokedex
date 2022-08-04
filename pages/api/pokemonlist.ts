// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Pokemon from "@models/Pokemon";
import { combinePokemonData } from "@utils/combinePokemonData";
import { multiFetcher } from "@utils/fetchers";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = { name: string; url: string }[];

let allPokemon: Pokemon[] | undefined = [];

const fetchPokemon = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=150&offset=0"
  );
  let pokemonList: { results: Data } = await res.json();
  const urls = pokemonList.results.map((pokemon) => pokemon.url);
  const pokemonDetails = await multiFetcher(...urls);

  allPokemon = combinePokemonData(pokemonList, pokemonDetails);
};

fetchPokemon();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(allPokemon || []);
}
