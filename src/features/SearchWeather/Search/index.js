import React from "react";
import styled from "styled-components";

import Input from "../../../components/input";
import Button from "../../../components/button";

const StyledWrapperSearch = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  flex-flow: row wrap;

  input {
    flex: 1 0 auto;
  }
`;

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
