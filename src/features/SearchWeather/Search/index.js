import React from "react";

import Input from "../../../components/input";
import Button from "../../../components/button";

import { StyledWrapperSearch } from "./SearchWrapper.css";

const Search = props => {
  const { submit, handleChange, handleClick } = props;
  return (
    <StyledWrapperSearch className="wrapper-search">
      <Input
        placeholder="Search for your city"
        handleSubmit={submit}
        handleChange={handleChange}
      />
      <Button value="search" handleClick={handleClick} />
    </StyledWrapperSearch>
  );
};

export default Search;
