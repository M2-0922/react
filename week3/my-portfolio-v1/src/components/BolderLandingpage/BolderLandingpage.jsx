import React, { useContext } from 'react'
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';
import { Link } from "react-router-dom";

// import { BsArrowUpRight } from 'react-icons/ai';
import { AiOutlineArrowsAlt } from 'react-icons/ai';


const BolderLandingpageContainer    = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-family: 'Sora', sans-serif;
    font-size: 48px;
    line-height:56px;
    width: 100%;
    padding: 1rem 2rem 38px 2rem;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    border-bottom: 1px solid ${props => props.theme === "light" ? "#E2E2E2" : "#4D4D4D"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    border-bottom: none;
    @media screen and (max-width: 1030px) {
      flex-direction: column-reverse;
    }
`;

const ArrowShape = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    width: 36px;
    height: 36px;
    /* left: 265px; */
    /* top: 238px; */
    background: rgb(63, 65, 82);
    border-radius: 4px;
    svg{
      font-size: 24px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      width: 90%;
      height: 90%;
    }
`;

const ImgWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    width:50%;
    @media screen and (max-width: 1030px) {
      width:100%;
      padding: 0 0 1rem 0;
    }
    svg{
        font-size: 24px;
        cursor: pointer;
        color: ${props => props.theme === "light" ? "#fff" : "#fff"};
        transition:all 0.3s ease;
        :hover{
          opacity:0.4;
        }
    }
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
        }
`;

const TxtWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    width: 50%;
    padding: 1rem 2rem;
    @media screen and (max-width: 1030px) {
      width:100%;
      padding: 0 0 1rem 0;
    }
    h3{
      font-family: 'Sora', sans-serif;
      font-weight: 700;
      font-style: normal;
      font-size: 48px;
      line-height: 56px;
      color:#FFFFF;
    }
`;

const SubP = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  /* color: #DEDEDE; */
  color: ${props => props.theme === "light" ? "#333" : "#DEDEDE"};  
`;

const SecondP = styled.p`
    /* color: #D5D5D5; */
    color: ${props => props.theme === "light" ? "#333" : "#D5D5D5"};  
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.014em
`;




const BolderLandingpage = () => {
   const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <BolderLandingpageContainer theme={theme}>
        <ImgWrapper theme={theme}>
          <ArrowShape>
            <AiOutlineArrowsAlt />
          </ArrowShape>
          <img src="src/assets/imgBolderLandingpage.png" alt="img" width={556} height={282}/>
        </ImgWrapper>
        <TxtWrapper theme={theme}>
          <SubP theme={theme}>Web Development</SubP>
          <h3>Bolder Landingpage</h3>
          <SecondP theme={theme}>Serrow restructured and designed core pages, creating<br/>interactive elements that put users in control and allowed them<br/>to discover the information needed to make a decision.</SecondP>
        </TxtWrapper>
    </BolderLandingpageContainer>
  )
};

export default BolderLandingpage