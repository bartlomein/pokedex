import { useFetch } from "../../hooks/useFetch";
import ChainComponent from "./ChainComponent";
import { EvoChainResT, SpeciesResT } from "./types";

type EvolutionChainT = {
  id: number;
  name: string;
};

const EvolutionChain = ({ id, name }: EvolutionChainT) => {
  const { data }: SpeciesResT = useFetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}`
  );

  const evoChain = data?.evolution_chain?.url;

  const evoChainResponse: EvoChainResT = useFetch(evoChain);

  const chain = evoChainResponse?.data?.chain;

  return (
    <div>
      <h2> Evolution Chain</h2>
      {chain ? <ChainComponent chain={chain} name={name} /> : null}
    </div>
  );
};

export default EvolutionChain;
