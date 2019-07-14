import React from "react";
import styled from "styled-components";
import { toFahrenheit } from "../../utils/conversions";

const StyledItemDetails = styled.div`
  display: ${props => (props.isOpen ? "block" : "none")};

  .weather-ico {
    width: 48px;
  }
`;

const ListItemDetails = ({ details, isOpen }) => {
  return details.map(detail => {
    return (
      <StyledItemDetails key={detail.id} isOpen={isOpen}>
        <img
          alt={`${detail.weather_state_name} icon`}
          className="weather-ico"
          src={`https://www.metaweather.com/static/img/weather/${
            detail.weather_state_abbr
          }.svg`}
        />
        <div>{toFahrenheit(detail.the_temp)}</div>
        <div>{detail.weather_state_name}</div>
      </StyledItemDetails>
    );
  });
};

export default ListItemDetails;
