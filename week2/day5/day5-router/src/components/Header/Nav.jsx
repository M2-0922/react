import React from 'react'
import { Link } from "react-router-dom"
import styled from "styled-components"

const CustomNav = styled.nav`

`;

const List = styled.ul`
    display: flex;
    gap: 12px;
    padding: 12px 24px;
    align-items:center;
    li{
        list-style: none;
        a{
           text-decoration: none;
           color: black;
        }
    }
`;


const Nav = () => {
  return (
    <CustomNav>
        <List>
            <li id='logo'>
                <h1>
                    Logo
                </h1>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/character">Characters</Link>
            </li>
        </List>
    </CustomNav>
  )
}

export default Nav