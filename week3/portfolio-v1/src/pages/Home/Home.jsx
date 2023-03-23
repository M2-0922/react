import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import Hero from '../../components/Hero/Hero';
import Project from '../../components/hikaru/Project';
import Arrow from '../../components/hikaru/arrow';
import Lets from '../../components/hikaru/Lets';

const Wrapper = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 2rem;
`;

const Home = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <Wrapper theme={theme}>
        <Hero content={"Hola! Im Santiago, a special human with some ability to love learning and working on teamwork. "} />
        <Project />
        <Arrow />
        <Lets />
    </Wrapper>
  )
}

export default Home