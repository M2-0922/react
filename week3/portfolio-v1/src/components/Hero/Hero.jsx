import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import AvatarCard from '../AvatarCard/AvatarCard';
import Bio from '../BioCard/BioCard';
import SkillCard from "../SkillCard/SkillCard"
import { HiGlobe, HiClipboardList } from "react-icons/hi"


// ***FOR Course component***
import Course from '../../components/Course/Course';
import webIcon from '../../assets/Globe.png';
import uxIcon from '../../assets/ClipboardList.png';

// ***FOR CodeSnippetCard component***
import CodeSnippetCard from '../CodeSnippetCard/CodeSnippetCard';
import tailwindIcon from '../../assets/tailwindIcon.png';
import reactIcon from '../../assets/reactIcon.png';
import sassIcon from '../../assets/sassIcon.png';
import htmlIcon from '../../assets/htmlIcon.png';

// ***For SearchBar component***
import SearchBar from '../SearchBar/SearchBar';

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
`;

const RowWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
`;

const Hero = ({ content }) => {
    const { theme } = useContext(ThemeContext);

    // ***FOR Course component***
    const web = {
      image: webIcon,
      name: "webIcon",
      title: "Web Development",
      description: "You will receive a customized plan for your fitness journey, and lots of support."
    };
    const ux = {
      image: uxIcon,
      name: "uxIcon",
      title: "UX Research",
      description: "You will receive a customized plan for your fitness journey, and lots of support."
    }

    // ***FOR CodeSnippetCard component***
    const nextjs_stater = {
      title: "Nextjs Staeter",
      description: "A dead simple for nextjs project.",
      icons: [ tailwindIcon, reactIcon ],
      count: 8
    }
    const frontend_stater = {
      title: "Frontend Starter Kit",
      description: "A dead simple for html 5 boilerplate project. Included setup for minify css, html minify, SEO setting.",
      icons: [ tailwindIcon, sassIcon, htmlIcon ],
      count: 12
    }

  return (
    <>
        <CustomTitle theme={theme}>{heroData.title}</CustomTitle>
        <AvatarCard />
        <Course theme={theme} {...web} />
        <Course theme={theme} {...ux}/>
        <CodeSnippetCard theme={theme} {...nextjs_stater} />
        <CodeSnippetCard theme={theme} {...frontend_stater} />
        <SearchBar theme={theme} />
    </>
  )
}

export default Hero