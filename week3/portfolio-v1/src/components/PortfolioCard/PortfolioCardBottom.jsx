import styled from "styled-components";

import TailwindIcon from "../../assets/tailwind.svg";
import ReactIcon from "../../assets/react.svg";

import Star from "./Star";

const PortfolioCardBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TechStack = styled.div`
  display: flex;
  gap: 18px;
`;

export default function PortfolioCardBottom({ star }) {
  return (
    <PortfolioCardBottomContainer>
      <TechStack>
        <img src={TailwindIcon} alt="Tailwind Icon" />
        <img src={ReactIcon} alt="React Icon" />
      </TechStack>
      <Star star={star} />
    </PortfolioCardBottomContainer>
  );
}
