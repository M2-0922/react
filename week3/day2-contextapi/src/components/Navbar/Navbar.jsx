import { useContext } from 'react'
import { Link } from "react-router-dom"
import ThemeContext from '../../context/ThemeContext'
import styled from "styled-components"

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
  color: ${props => props.theme === "light" ? "#333" : "#fff" };

  ul {
    display: flex;
    align-items:center;
    list-style: none;
    gap: 12px;
  }

  h1{ 
    font-size: 1.5rem;
    margin-right: auto;
  }

  button {
    margin-left: 0.5rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    background-color: ${props => props.theme === "light" ? "#333" : "#fff"};
    color: ${props => props.theme === "light" ? "#fff" : "#333" };
    cursor: pointer;
  }
  a{
    text-decoration: none;
    color: ${props => props.theme === "light" ? "#333" : "#fff" };
  }
`;

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  
  return (
    <Nav theme={theme}>
      <h1>Logo</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <button onClick={toggleTheme}>{theme === "light" ? "Dark" : "Light"}</button>
      </ul>
    </Nav>
  )
}

export default Navbar