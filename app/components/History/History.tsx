import { selectHistory, useSelector } from "@/lib/redux";
import Link from "next/link";
const History = () => {
  const history = useSelector(selectHistory);
  return (
    <div>
      <div>History</div>
      {history.map((item) => {
        return (
          <li>
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
