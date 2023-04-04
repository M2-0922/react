import React, {useContext} from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import AvatarCard from '../AvatarCard/AvatarCard';
import BioConnect from '../BioConnect/BioConnect';
import WhatIDo from '../WhatIDo/WhatIDo';

const CustomTitle = styled.h1`
    margin-top: 94px;
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;
    /* or 129% */

    letter-spacing: 1px;

    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #2dbf68 40.75%, #4CA9FF 90.52%);" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%);"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    width: 80%;
`;

const HeroBasicInfo = styled.div`
  display: flex;
  justify-content: start;
  gap: 35px;
  margin-top: 63px;

`;

const Hero = ({content}) => {
    const {theme} = useContext(ThemeContext);
  return (
    <>
        <CustomTitle theme={theme}>{content}</CustomTitle>
        <HeroBasicInfo>
          <AvatarCard />
          <BioConnect />
        </HeroBasicInfo>
        <WhatIDo />
    </>
  )
}

export default Hero