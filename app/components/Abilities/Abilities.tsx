import { Ability } from "@/app/pokemon/[name]/types";
import styles from "./Abilities.module.scss";

const Abilities = ({ abilities }: { abilities: Ability[] }) => {
  return (
    <div>
      <h2>Abilities</h2>
      <ul>
        {abilities.map((ability: Ability, index) => {
          const name = ability.ability.name;
          return (
            <li key={`${name}_${index}`} className={styles.ability}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Abilities;
