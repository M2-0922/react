import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Navbar = () => {

    const CustomNav = styled.nav`
    `

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
    `

  return (
    <CustomNav>
        <List>
            <li>
                {/* <a href="/">Home</a> //this page will reroad after jump by <a href></a> -> it means takes much time */}
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/characters'>Characters</Link>
            </li>
        </List>
    </CustomNav>
  )
}

export default Navbar;