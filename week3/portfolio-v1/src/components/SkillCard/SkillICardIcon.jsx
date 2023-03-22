import styled from "styled-components";

const IconContainer = styled.div`
  height: 72px;
  width: 72px;
  background-image: linear-gradient(#4ca9ff, #3bf686);
  padding: 1px;
  border-radius: 50%;
  position: relative;
  top: -35px;
`;

const IconContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #323443;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SkillCardIcon() {
  return (
    <IconContainer>
      <IconContent></IconContent>
    </IconContainer>
  );
}
