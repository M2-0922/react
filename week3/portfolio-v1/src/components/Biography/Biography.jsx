import React from "react";
import styled from "styled-components";

const BiographyContainer = styled.div`
  height: 170px;
  width: 500px;
  display: flex;
  flex-direction: column;
`;

const BiographyHeading = styled.h2`
  font-weight: 700;
  font-size: 28px;
  line-height: 72px;
  letter-spacing: 1px;
`;

const BiographyDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
`;

const BlueText = styled.span`
  color: #4ca9ff;
`;

const LightBlueText = styled.span`
  color: #62d9ff;
`;

const LightGreenText = styled.span`
  color: #80ffa3;
`;

export default function Biography() {
  return (
    <BiographyContainer>
      <BiographyHeading>Biography</BiographyHeading>
      <BiographyDescription>
        Getting Buff +1 for learning, Buff +2 for documentation and more buff on
        managing team. Exicited on <BlueText>React</BlueText>,
        <LightBlueText>UX Research</LightBlueText> and
        <LightGreenText>Agile</LightGreenText>.
      </BiographyDescription>
    </BiographyContainer>
  );
}
