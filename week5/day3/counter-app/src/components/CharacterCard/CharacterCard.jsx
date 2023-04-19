import React from 'react'
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../actions/ramActions';

const CustomCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #3c3c3c;
    padding: 1rem;
    border-radius: 6px;
    text-align: start;
    img{
        margin-bottom: 12px;
        border-radius: 6px;
    }

`;

const CharacterCard = ({ id, name, status, image, isFavorite }) => {
  const dispatch = useDispatch();

  const handleFavs = (id) => {
    dispatch(toggleFavorite(id))
  }


  return (
    <CustomCardContainer onClick={() => handleFavs(id)}>
        <img src={image} alt={id + "-" + name} />
        <h4>{name} - {isFavorite ? " 👍🏼" : " 🤍"}</h4>
        <p>{status}</p>
    </CustomCardContainer>
  )
}

export default CharacterCard