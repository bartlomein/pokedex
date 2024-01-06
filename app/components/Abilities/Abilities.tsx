import { Ability } from "@/app/pokemon/[name]/types";
import styles from "./Abilities.module.scss";

const Abilities = ({ abilities }: { abilities: Ability[] }) => {
  return (
    <div>
      <h2>Abilities</h2>
      <ul>
        {abilities.map((ability: Ability) => {
          return <li className={styles.ability}>{ability.ability.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Abilities;
