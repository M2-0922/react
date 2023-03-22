import React from "react";
import styled from "styled-components";

import starIcon from "../../assets/star.svg";

const StarContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function Star({ star }) {
  return (
    <StarContainer>
      <img src={starIcon} alt="Star Icon" />
      <p>{star} Stars</p>
    </StarContainer>
  );
}
