import React from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const CustomCard = styled.div`
    width: 300px;
    height: 300px;
    background-color: darkgray;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 12px;
    transition: all 0.4s;
    &:hover{
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
    }
    h2{
       margin: 12px 0; 
    }
`;

const CustomButton = styled.button`
    color: #000;
    margin-top: 12px;
    padding: 6px 12px;
    border-radius: 4px;
    border: 1px solid #000;
    transition: all 0.2s;
    background-color: transparent;
    &:hover{
        background-color: #000;
        color: #FFF;
    }
`;

const Card = ({ character, id }) => {
    const navigate = useNavigate();

    function handleRoute() {
        navigate(`/character/${id}`)
    }
  return (
    <CustomCard>
        <h2>{character.name}</h2>
        <CustomButton onClick={handleRoute}>Go to Profile</CustomButton>
    </CustomCard>
  )
}

export default Card