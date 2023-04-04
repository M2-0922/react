import React, { useContext } from 'react';
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';
import { Link } from 'react-router-dom'; //aタグを使うとクリックする度に再レンダーされてしまって負荷が大きいので、Linkを使う

const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    background-color: ${props => props.theme == "light" ? "#fff" : "#333"};
    border-bottom: 1px solid ${props => props.theme == "light" ? "#333" : "#fff"};
    color: ${props => props.theme == "light" ? "#333" : "#fff"};
    height: 128px;
    h1{
        margin-right: auto;
        color: ${props => props.theme == "light" ? "#333" : "#fff"};
    }
    ul{
        list-style: none;
        display: flex;
        gap: 1rem;
        li{
            a{
                text-decoration: none;
                color: ${props => props.theme == "light" ? "#333" : "#fff"};
            }
        }
    }
    button{
        margin-left: 1rem;
        padding: 0.25rem 0.5rem;
        background-color: ${props => props.theme == "light" ? "#333" : "#fff"};
        color: ${props => props.theme == "light" ? "#fff" : "#333"};
        border: none;
        border-radius: 2px;
        cursor: pointer;
    }
`;

const Nav = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <NavContainer theme={theme}>
        <h1>Santiago</h1>

        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/Portfolio"}>Portfolio</Link>
            </li>
            <li>
                <Link to={"/Snippet"}>Snippet</Link>
            </li>
        </ul>
        <button onClick={toggleTheme}>{theme == "light" ? "dark" : "light"}</button>
    </NavContainer>
  )
}

export default Nav