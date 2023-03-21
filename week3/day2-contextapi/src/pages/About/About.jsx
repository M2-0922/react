import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'

const AboutContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 2rem;
`;

const About = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <AboutContainer theme={theme}>About { theme }</AboutContainer>
  )
}

export default About