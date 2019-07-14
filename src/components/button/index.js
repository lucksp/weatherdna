import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { type, handleClick, value } = props;

  return (
    <button type={type} onClick={handleClick}>
      {value}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  value: PropTypes.string
};

Button.defaultProps = {
  type: "button"
};

export default Button;
