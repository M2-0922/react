import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import Hero from '../../components/Hero/Hero';

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
    </Wrapper>
  )
}

export default Home