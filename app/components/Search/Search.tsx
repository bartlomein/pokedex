import { useFetch } from "@/app/hooks/useFetch";
import { useEffect, useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filteredData, setFilteredData] = useState([]);

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
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search..."
      />
      <ul>
        {searchTerm &&
          filteredData?.map((item, index) => {
            if (index < 5) {
              return <li key={item.name}>{item.name}</li>;
            }
          })}
      </ul>
    </div>
  );
};

export default Search;
