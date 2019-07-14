import { useState } from "react";
import { fetchWrapper } from "../api/api";

export const useFetch = fetchOptions => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState([]);

  const fetchData = async fetchOptions => {
    setIsLoading(true);
    const { url, options } = fetchOptions;

    try {
      const data = await fetchWrapper(url, options);

      setResponse(data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  return [fetchData, response, error, isLoading];
};
