import React, { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styled from "styled-components";
import Hero from "../../components/Hero/Hero"

const HomeContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 2rem;
`;

const Home = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <HomeContainer theme={theme}>
        <Hero />
    </HomeContainer>
  )
}

export default Home