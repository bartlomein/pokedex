import styles from "./Moves.module.scss";

const Moves = ({ moves }: any) => {
  return (
    <div>
      <h2>Moves</h2>
      <ul>
        {moves?.map((elem: any) => {
          return <li className={styles.move}>{elem.move.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Moves;
