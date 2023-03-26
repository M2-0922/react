import React ,{ useContext }from 'react';
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';

const BioContainer = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#36373a"};
    color: ${props => props.theme === "light" ? "#36373a" : "#fff"};
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

const IconWrap = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImg = styled.div`
  color: ${props => props.theme === "light" ? "#36373a" : "#fff"};
  width: 70px;
  height: 70px;
  display: flex;
  border: none;
  align-items: center;
  justify-content: center;
  svg {
    margin: auto;
    width: 50%;
    height: 50%;
  }
`;

const Bio = (props) => {
  const {theme} = useContext(ThemeContext);

  return(
    <BioContainer theme={theme}>
      <IconWrap theme={theme}>
        <IconImg theme={theme}>{props.icon}</IconImg>
      </IconWrap>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </BioContainer>
  );
}

export default Bio