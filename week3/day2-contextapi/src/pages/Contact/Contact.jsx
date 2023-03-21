import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext';
import styled from "styled-components";

const ContactContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 2rem;
`;

const Contact = () => {
    const { theme } = useContext(ThemeContext)
  return (
    <ContactContainer theme={theme}>Contact</ContactContainer>
  )
}

export default Contact