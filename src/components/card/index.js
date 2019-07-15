import React from "react";
import PropTypes from "prop-types";
import { StyledCard } from "./card.css";

const Card = props => {
  const { classes } = props;
  return (
    <StyledCard className={`card ${classes}`}>{props.children}</StyledCard>
  );
};

Card.propTypes = {
  classes: PropTypes.string
};

Card.defaultProps = {
  classes: ""
};

export default Card;
