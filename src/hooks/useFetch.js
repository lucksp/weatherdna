import { useState } from "react";
import { fetchWrapper } from "../api/api";

export const useFetch = fetchOptions => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState([]);

  const fetchData = async fetchOptions => {
    const { url, options } = fetchOptions;

    try {
      const data = await fetchWrapper(url, options);

      setResponse(data);
    } catch (error) {
      setError(error);
    }
  };

  return [response, error, fetchData];
};
