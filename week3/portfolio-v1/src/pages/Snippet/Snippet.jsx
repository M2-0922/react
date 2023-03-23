import React,{useContext} from 'react';
import { MDBCol } from "mdbreact";
import styled from "styled-components";
import ThemeContext from '../../context/ThemeContext';
import {AiOutlineSearch} from 'react-icons/ai';


const SnippetContainer = styled.div`
  .input-container {
  display: flex;
  align-items: center;
  padding:10px 10px; 
  
  }
  .form-control{
    position:relative;
    background-color: ${props => props.theme === "light" ? "#fff" : "#3F4152"};
    color: ${props => props.theme === "light" ? "#3F4152" : "#fff"};
    
    width: 1140px;
    height: 83px;
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 32px;
    letter-spacing: 0.014em;
    padding: 10px 36px;
  }

  .search-icon {
    position: absolute;
    right:470px;
    font-size:28px;
    color: ${props => props.theme === "light" ? "#3F4152" : "#fff"};
   
  }


  
`;

const Snippet = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <SnippetContainer theme={theme}>
      <MDBCol md="6">
        <div className = "input-container">
          <input className="form-control" type="text" placeholder="Type your favorite snippet here, hehehe ....." aria-label="Search" />
          <AiOutlineSearch  className="search-icon"/>
        </div>
      </MDBCol>
    </SnippetContainer>
    )
  }

export default Snippet