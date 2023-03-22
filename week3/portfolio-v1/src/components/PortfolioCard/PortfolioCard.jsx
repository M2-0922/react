import React from "react";

import styled from "styled-components";

import PortfolioCardTop from "./PortfolioCardTop";
import PortfolioCardBottom from "./PortfolioCardBottom";

const PortfolioCardContainer = styled.div`
  width: 550px;
  height: 280px;
  background-color: #323443;
  border-radius: 20px;
  padding: 24px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default function PortfolioCard({ heading, text, star }) {
  return (
    <PortfolioCardContainer>
      <PortfolioCardTop heading={heading} text={text} />
      <PortfolioCardBottom star={star} />
    </PortfolioCardContainer>
  );
}
