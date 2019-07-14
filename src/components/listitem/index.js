import React from "react";
import PropTypes from "prop-types";

const ListItem = props => {
  const { title } = props;

  return <div>{title}</div>;
};

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  location_type: PropTypes.oneOf(["City"]).isRequired,
  woeid: PropTypes.number.isRequired,
  latt_long: PropTypes.string.isRequired
};

export default ListItem;
