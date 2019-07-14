import React, { useState } from "react";
import PropTypes from "prop-types";
import { useFetch } from "../../hooks/useFetch";
import ListItemDetails from "./ListItemDetails";

import { StyledListItem } from "./ListItem.css";

const ListItem = props => {
  const { title, woeid } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [fetchData, results, error, isLoading] = useFetch();

  const handleClick = async () => {
    setIsOpen(!isOpen);

    if (isOpen) {
      return;
    }
    const fetchObj = {};
    fetchObj.url = `/api/location/${woeid}/`;

    await fetchData(fetchObj);
  };

  if (error.length) {
    return <div>Please try again</div>;
  }

  return (
    <StyledListItem onClick={handleClick}>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <React.Fragment>
          <div className="weather-city-title">{title}</div>
          {results && (
            <ListItemDetails
              details={results.consolidated_weather}
              isOpen={isOpen}
            />
          )}
        </React.Fragment>
      )}
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
