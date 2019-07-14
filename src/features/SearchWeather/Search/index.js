import React from "react";

import Input from "../../../components/input";
import Button from "../../../components/button";

const Search = props => {
  const { submit, handleChange, handleClick } = props;
  return (
    <div className="wrapper-search">
      <Input
        placeholder="Search for your city"
        handleSubmit={submit}
        handleChange={handleChange}
      />
      <Button value="search" handleClick={handleClick} />
    </div>
  );
};

export default Search;
