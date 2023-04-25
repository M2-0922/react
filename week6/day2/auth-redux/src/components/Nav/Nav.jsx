import React from 'react'
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { logout } from '../../slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

const NavContainer = styled.nav`
  ul {
    display: flex;
    align-items: center;
    list-style: none;
    gap: 1rem;
    h1 {
      margin-right: auto;
    }
    li {
      a {
        text-decoration: none;
        color: white;
      }
    }
  }
`;
const Nav = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("/login");
      }
  return (
    <NavContainer>
        <ul>
          <h1>Logo</h1>
          <li>
            <Link to={"/"}>Home</Link>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </NavContainer>
  )
}

export default Nav