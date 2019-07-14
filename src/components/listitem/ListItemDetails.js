import React from "react";
import styled from "styled-components";
import { toFahrenheit } from "../../utils/conversions";

const StyledItemDetails = styled.div`
  display: ${props => (props.isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;

  .weather-detail-item {
    text-align: center;
    font-weight: 300;
    .weather-ico {
      width: 32px;
    }
  }
`;

const ListItemDetails = ({ details, isOpen }) => {
  return (
    <StyledItemDetails className="weather-item-details" isOpen={isOpen}>
      {details.map(detail => {
        return (
          <div key={detail.id} className="weather-detail-item">
            <img
              alt={`${detail.weather_state_name} icon`}
              className="weather-ico"
              src={`https://www.metaweather.com/static/img/weather/${
                detail.weather_state_abbr
              }.svg`}
            />
            <div>{toFahrenheit(detail.the_temp)}°</div>
            <div>{detail.weather_state_name}</div>
          </div>
        );
      })}
    </StyledItemDetails>
  );
};

export default ListItemDetails;
