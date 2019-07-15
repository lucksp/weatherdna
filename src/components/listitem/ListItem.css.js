import styled from "styled-components";

export const StyledListItem = styled.div`
  cursor: pointer;
  padding: 8px;

  .weather-details-title {
    display: flex;
    align-items: center;

    .arrow {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      ${props => props.isOpen && "transform: rotate(90deg);"};
    }

    .weather-city-title {
      text-decoration: underline;
    }
  }
`;
