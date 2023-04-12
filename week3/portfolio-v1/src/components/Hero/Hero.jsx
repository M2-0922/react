import React, { useContext, useState } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from 'styled-components';
import AvatarCard from '../AvatarCard/AvatarCard';

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

const Hero = ({ content }) => {
    const { theme } = useContext(ThemeContext);
    const [heroData, setHeroData] = useState(
      {
        title: "Hi Im Santiago, a special human with some ability to love learning and working on teamwork.",
        bioOne: {
          title: "Biography",
          content: "Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team. Exicited on React, UX Research and Agile."
        },
        bioTwo: {
          title: "What I do",
          content: "Build and maintain websites, frontend dev also have a mentorship called MOFON. My motto is Beauty and function in equal measure as priority."
        },
        skillCards:[
          {
            title:"Web Development",
            content: "You will receive a customized plan for your fitness journey, and lots of support.",
            icon: <HiGlobe />
          },
          {
            title:"UX Research",
            content: "You will receive a customized plan for your fitness journey, and lots of support.",
            icon: <HiClipboardList />
          }
        ],
        social:[
          {
            title:"instagram",
            url: "/",
            icon: ""
          },
          {
            title:"twitter",
            url: "",
            icon: ""
          },
          {
            title:"facebook",
            url: "",
            icon: ""
          },
        ]


      }
    );

    // useEffect(() => {
    // }, []);

  return (
    <>
        <CustomTitle theme={theme}>{content}</CustomTitle>
        <AvatarCard />
    </>
  )
}

export default Hero