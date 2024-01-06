import styles from "./Species.module.scss";

const Species = ({ species }: any) => {
  return (
    <div>
      <h2>Species</h2>
      <div className={styles.pokemonName}>{species.name}</div>
    </div>
  );
};

export default Species;
