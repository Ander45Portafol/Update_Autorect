import { useState, useEffect } from "react";

export function useFetch(url, action) {
  const [data, setData] = useState();
  const [error,setError]=useState()

  useEffect(() => {
    fetch(url, action)
      .then((response) => response.json())
      .then((info) => setData(info.data))
      .catch((error) => setError(error))
  }, [url]);
  return { data, error };
}
