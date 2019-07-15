import React, { useState } from "react";

import Search from "./Search";
import { useFetch } from "../../hooks/useFetch";
import ResultList from "./ResultList";
import Card from "../../components/card";
import { StyledSearchWeather } from "./SearchWeather.css";

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
    <StyledSearchWeather>
      <Card class="weather-search">
        <div className="weather-help-text">Search for Weather:</div>
        <Search
          submit={submit}
          handleChange={handleChange}
          handleClick={sendLocation}
        />
      </Card>
      {results && <ResultList results={results} error={error} />}
    </StyledSearchWeather>
  );
};

export default SearchWeather;
