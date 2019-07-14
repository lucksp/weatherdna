import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./button.css";

const Button = props => {
  const { type, handleClick, value } = props;

  return (
    <StyledButton type={type} onClick={handleClick}>
      {value}
    </StyledButton>
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
