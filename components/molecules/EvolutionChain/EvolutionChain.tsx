import React from "react";

type chain = {
  species: { name: string };
  evolves_to: Array<chain>;
  evolution_details: Array<{ trigger: { name: string } }>;
};

type Props = {
  chain: chain;
};

const EvolutionChain = ({ chain }: Props): JSX.Element => {
  return (
    <>
      {chain.evolves_to.map((evolution) => (
        <div key={evolution.species.name}>
          <div>
            {chain.species.name}
            {"->"}
            {evolution.species.name}
          </div>
          <EvolutionChain chain={evolution} />
        </div>
      ))}
    </>
  );
};

export default EvolutionChain;
