import { Move } from "@/app/pokemon/[name]/types";
import styles from "./Moves.module.scss";

const Moves = ({ moves }: { moves: Move[] }) => {
  return (
    <div>
      <h2>Moves</h2>
      <ul>
        {moves?.map((move: Move) => {
          return <li className={styles.move}>{move.move.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Moves;
