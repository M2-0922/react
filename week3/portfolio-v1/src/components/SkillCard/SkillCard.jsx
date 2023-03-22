import React from "react";
import styled from "styled-components";

import SkillCardIcon from "./SkillICardIcon";

const SkillContainer = styled.div`
  width: 260px;
  height: 190px;
  background: #323443;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillHeading = styled.h3`
  font-weight: 600;
  font-size: 16px;
  letter-spacing: 1px;
  color: #fafaf9;
  text-align: center;
`;

const ContentContainer = styled.div`
  padding: 0 18px 15px 18px;
`;

export default function SkillCard({ heading, content }) {
  return (
    <SkillContainer>
      <SkillCardIcon />
      <ContentContainer>
        <SkillHeading>{heading}</SkillHeading>
        <p>{content}</p>
      </ContentContainer>
    </SkillContainer>
  );
}
