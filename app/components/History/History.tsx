import { selectHistory, useSelector } from "@/lib/redux";
import Link from "next/link";
import styles from "./History.module.scss";
const History = () => {
  const history = useSelector(selectHistory);
  return (
    <div>
      <h4>Search History</h4>
      {history.map((item, index) => {
        return (
          <li className={styles.historyItem} key={`${item}_${index}`}>
            <Link key={item} href={`/pokemon/${item}`}>
              {item}
            </Link>
          </li>
        );
      })}
    </div>
  );
};

export default History;
