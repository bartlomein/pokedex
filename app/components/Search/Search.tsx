import { useFetch } from "@/app/hooks/useFetch";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Search.module.scss";

import { historySlice, useDispatch } from "@/lib/redux";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);

  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterData = () => {
    const filtered = data?.results.filter((item) => {
      const searchTermLower = searchTerm.toLowerCase();
      return item.name.toLowerCase().includes(searchTermLower);
    });
    setFilteredData(filtered);
  };

  const { data, error } = useFetch(
    "https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=2000"
  );

  useEffect(() => {
    setFilteredData(data?.results);
  }, [data]);

  useEffect(() => {
    filterData();
  }, [searchTerm]);

  return (
    <div className={styles.search}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      {/* TODO make this a dropdown with pokeitems */}
      <ul className={styles.dropdownList}>
        {searchTerm &&
          filteredData?.map((item, index) => {
            if (index < 5) {
              return (
                <li className={styles.listItem}>
                  <Link
                    key={item.name}
                    href={`/pokemon/${item.name}`}
                    onClick={() =>
                      dispatch(historySlice.actions.add(item.name))
                    }
                  >
                    {item.name}
                  </Link>
                </li>
              );
            }
          })}
      </ul>
    </div>
  );
};

export default Search;
