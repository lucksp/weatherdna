import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const { type, handleSubmit, handleChange, placeholder } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string
};

Input.defaultProps = {
  type: "text"
};

export default Input;
