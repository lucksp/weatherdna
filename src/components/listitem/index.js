import React from "react";
import PropTypes from "prop-types";
import { useFetch } from "../../hooks/useFetch";
import ListItemDetails from "./ListItemDetails";

import { StyledListItem } from "./ListItem.css";

const ListItem = props => {
  const { title, woeid } = props;
  const [results, error, fetchData] = useFetch();

  const handleClick = async () => {
    const fetchObj = {};
    fetchObj.url = `/api/location/${woeid}/`;

    await fetchData(fetchObj);
  };

  return (
    <StyledListItem onClick={handleClick}>
      {title}
      {results && <ListItemDetails details={results.consolidated_weather} />}
    </StyledListItem>
  );
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  location_type: PropTypes.oneOf(["City"]).isRequired,
  woeid: PropTypes.number.isRequired,
  latt_long: PropTypes.string.isRequired
};

export default ListItem;
