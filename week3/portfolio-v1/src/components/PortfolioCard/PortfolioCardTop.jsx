import React from "react";

import styled from "styled-components";

const PortfolioCardHeading = styled.h4`
  font-size: 28px;
  line-height: 72px;
`;

const PortfolioCardText = styled.p`
  font-size: 18px;
  line-height: 32px;
`;

export default function PortfolioCardTop({ heading, text }) {
  return (
    <div>
      <PortfolioCardHeading>{heading}</PortfolioCardHeading>
      <PortfolioCardText>{text}</PortfolioCardText>
    </div>
  );
}
