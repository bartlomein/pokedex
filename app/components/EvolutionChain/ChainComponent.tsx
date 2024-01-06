import Link from "next/link";
import styles from "./EvolutionChain.module.scss";
import { Chain, ChainItemT } from "./types";
import { normalizeEvolutionChain } from "./utils";

type ChainComponentT = {
  chain: Chain;
  name: string;
};

const ChainComponent = ({ chain, name }: ChainComponentT) => {
  const finalChain = normalizeEvolutionChain(chain);

  return (
    <div>
      {finalChain.map((chainItem: ChainItemT) => {
        const currentName = chainItem.current.name;
        const nextName = chainItem.next.name;

        return (
          <div className={styles.evolutionChain}>
            {currentName === name ? (
              <div className={styles.pokemonName}>{chainItem.current.name}</div>
            ) : (
              <Link key={currentName} href={`/pokemon/${currentName}`}>
                {currentName}
              </Link>
            )}

            <div>{" - - > "}</div>
            {nextName === name ? (
              <div className={styles.pokemonName}>{chainItem.current.name}</div>
            ) : (
              <Link key={nextName} href={`/pokemon/${nextName}`}>
                {nextName}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ChainComponent;
