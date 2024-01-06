import { useEffect, useState } from "react";

export function useFetch(endpoint: string) {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Resets the loader and errors on subsequent calls
    setError(null);
    setLoading(true);
    const fetchData = async () => {
      try {
        const res = await fetch(`${endpoint}`);
        const responseJson = await res.json();
        setData(responseJson);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setLoading(false);
    };

    fetchData();
  }, [endpoint]);

  return { data, error, loading };
}
