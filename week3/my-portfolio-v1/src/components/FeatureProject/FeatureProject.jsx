import React, { useContext } from 'react'
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';
import { Link } from "react-router-dom";

const FeatureProjectContainer    = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
    display: flex;
    justify-content: flex-start;
    align-items:center;
    font-family: 'Sora', sans-serif;
    font-size: 48px;
    line-height:56px;
    padding: 1rem 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    border-bottom: 1px solid ${props => props.theme === "light" ? "#E2E2E2" : "#4D4D4D"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    /* height: 56px; */
    border-bottom:none;
    @media screen and (max-width: 1030px) {
      display:none;
    }
`;


const FeatureProject = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <FeatureProjectContainer theme={theme}>
        <h3>Feature Project</h3>
    </FeatureProjectContainer>
  )
}

export default FeatureProject