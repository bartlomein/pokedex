import styles from "./EvolutionChain.module.scss";
import { normalizeEvolutionChain } from "./utils";
const ChainComponent = ({ chain, name }) => {
  const finalChain = normalizeEvolutionChain(chain);

  return (
    <div>
      Evolution Chain
      <div>
        {finalChain.map((chainItem) => {
          return (
            <div className={styles.evolutionChain}>
              <div className={styles.pokemonName}>{chainItem.current.name}</div>
              <div>{" - - > "}</div>
              <div className={styles.pokemonName}>{chainItem.next.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChainComponent;
