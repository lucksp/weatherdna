import React from "react";
import PropTypes from "prop-types";
import ListItem from "../../../components/listitem";
import Card from "../../../components/card";

const ResultList = props => {
  const { results, error } = props;
  if (error.length || !results.length) {
    return <div>Please try again</div>;
  }

  return (
    <div className="weather-results-list">
      {results.map(result => {
        return (
          <Card key={result.woeid}>
            <ListItem {...result} />
          </Card>
        );
      })}
    </div>
  );
};

ResultList.propTypes = {
  error: PropTypes.array,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      location_type: PropTypes.oneOf(["City"]).isRequired,
      woeid: PropTypes.number.isRequired,
      latt_long: PropTypes.string.isRequired
    })
  )
};

export default ResultList;
