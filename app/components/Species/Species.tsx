import { Species } from "../EvolutionChain/types";
import styles from "./Species.module.scss";

const Species = ({ species }: { species: Species }) => {
  return (
    <div>
      <h2>Species</h2>
      <div className={styles.pokemonName}>{species?.name}</div>
    </div>
  );
};

export default Species;
