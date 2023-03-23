import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import AvatarCard from '../AvatarCard/AvatarCard';
import Description from '../Description/Description';
import data from '../../assets/data';
import Connect from '../Connect/Connect';
import { BiWorld } from "react-icons/bi";
import { HiClipboardList } from "react-icons/hi";
import BiographyCard from '../BiographyCard/BiographyCard';


const CustomTitle = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;

    letter-spacing: 1px;

    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 0.05%, #4CA9FF 95.52%);" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%)"};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    width: 80%;
    padding: 2rem 5rem;
`;

const Biography = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  padding: 2rem 5rem;
`;

const WhatIdo = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 2rem 5rem;
`;

const Hero = ({ content }) => {
    const { theme } = useContext(ThemeContext);
    const {description, whatido} = data;
  return (
    <>
        <CustomTitle theme={theme}>{content}</CustomTitle>
        <Biography>
          <AvatarCard />
          <Description
            title={description[0].title}
            content={description[0].content}
            wordsList={description[0].colorWords}
          />
          <Connect
            instagramLink="https://www.instagram.com/"
            twitterLink="https://twitter.com/?lang=en"
            facebookLink="https://www.facebook.com/"
          />
        </Biography>
        <WhatIdo>
          <Description
            title={description[1].title}
            content={description[1].content}
            wordsList={description[1].colorWords}
          />
          {whatido.map((item, index) => 
            <BiographyCard key={index} icon={index % 2 === 0 ? <BiWorld /> : <HiClipboardList />} title={item.title} content={item.content}/>
          )}
        </WhatIdo>
    </>
  )
}

export default Hero