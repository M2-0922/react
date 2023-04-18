import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import Hero from '../../components/Hero/Hero';
import SearchBar from '../../components/SearchBar/SearchBar';

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
      <SearchBar placeholder={"Type your favorite snippet here, hehehe ..."} />
      <Hero content={"Hola! Im Santiago, a special human with some ability to love learning and working on teamwork."} />
    </Wrapper>
  )
}

export default Home