import PokemonView from "@organisms/PokemonView";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";

const getName = (queryResult: string | string[] | undefined) => {
  let pokeId;
  if (!queryResult) return { pokeId, type: "undefined" };
  pokeId = Array.isArray(queryResult) ? queryResult[0] : queryResult;
  const isNumber = (id: string) => /\d+/.test(id);
  if (isNumber(pokeId)) return { pokeId, type: "number" };
  return { pokeId, type: "name" };
};

const pages = ["about", "moves", "evolution", "basestats"] as const;
type PageType = typeof pages[number];
const isPage = (x: any): x is PageType => pages.includes(x);

const getPage = (queryResult: string | string[] | undefined): PageType => {
  if (!queryResult || queryResult.length < 2) return "about";
  return isPage(queryResult[1]) ? queryResult[1] : "about";
};

const PokemonPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const { pokeId, type } = getName(slug);
  const page = getPage(slug);

  if (!pokeId) return <div>Loading</div>;
  return (
    <div>
      <Head>
        <title>{pokeId}</title>
      </Head>
      {pokeId} - {page || "about"}
      <PokemonView />
    </div>
  );
};

export default PokemonPage;
