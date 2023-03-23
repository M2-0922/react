import React ,{ useContext }from 'react';
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';

const BioContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    font-family: 'Inter';
    font-style: normal;
    margin
    h1{
        width: 158px;
        height: 72px;
        }
    p{
        width: 450px;
        height: 96px;
        font-weight: 400;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 0.014em;
        }
`;


const ColoredText = styled.span`
  color: ${props => props.color};
`;

const Bio = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    
  return (
    <BioContainer theme ={theme}>
        <h1>Biography</h1>
        <p>
        Getting Buff +1 for learning, Buff +2 for documentation and more buff on managing team.Exicited on{' '}
        <ColoredText color="#4CA9FF">React</ColoredText>,{' '}
        <ColoredText color="#62D9FF">UX Research</ColoredText> and{' '}
        <ColoredText color="#80FFA3">Agile</ColoredText>.
      </p>
        </BioContainer>
  )
}

export default Bio