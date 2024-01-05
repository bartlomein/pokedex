import styles from "./Abilities.module.scss";

const Abilities = ({ abilities }: any) => {
  return (
    <div>
      <h2>Abilities</h2>
      <ul>
        {abilities?.map((elem: any) => {
          return <li className={styles.ability}>{elem.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Abilities;
