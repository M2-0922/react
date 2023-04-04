import React, { useContext } from 'react';
import ThemeContext  from '../../context/ThemeContext';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';

 
const FooterContainer = styled.footer`
    background-color: ${props => props.theme == "light" ? "#fff" : "#333"};
    border-top: 1px solid ${props => props.theme == "light" ? "#333" : "#fff"};
    color: ${props => props.theme == "light" ? "#333" : "#fff"};
    height: 200px;
    padding: 1rem 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    h5{
        margin-top: 3rem;
        margin-bottom: 1rem;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding-bottom: 1rem;
    svg{
        font-size: 24px;
    }
    ul{
        list-style: none;
        display: flex;
        gap: 2rem;
        a{
            text-decoration: none;
            color: ${props => props.theme == "light" ? "#333" : "#fff"};
        }
    }
`;

const Footer = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <FooterContainer theme={theme}>
        <RowWrapper theme={theme}>
            <ul>
                <li>
                    <Link>Docks</Link>
                </li>
                <li>
                    <Link>Starter Templete</Link>
                </li>
                <li>
                    <Link>Book Notes</Link>
                </li>
                <li>
                    <Link>Statistic</Link>
                </li>
            </ul>
        </RowWrapper>
        <h5>Reach me out</h5>
        <RowWrapper>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillTwitterCircle />
        </RowWrapper>
    </FooterContainer>
  )
}

export default Footer