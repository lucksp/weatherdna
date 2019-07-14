import React, { useState } from "react";

import Search from "./Search";
import { useFetch } from "../../hooks/useFetch";
import ResultList from "./ResultList";

const SearchWeather = () => {
  const [inputValue, setInputValue] = useState("");
  const [fetchData, results, error] = useFetch();

  const sendLocation = async () => {
    if (!inputValue) return false;

    const fetchObj = {};
    fetchObj.url = `/api/location/search/?query=${inputValue}`;

    await fetchData(fetchObj);
  };

  const submit = e => {
    if (e.key !== "Enter" || !inputValue) return false;
    sendLocation();
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <div className="weather-search">
      <div className="weather-help-text">Search for Weather:</div>
      <Search
        submit={submit}
        handleChange={handleChange}
        handleClick={sendLocation}
      />
      {results && <ResultList results={results} error={error} />}
    </div>
  );
};

export default SearchWeather;
