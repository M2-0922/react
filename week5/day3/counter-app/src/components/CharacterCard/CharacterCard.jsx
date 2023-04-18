import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { toggleFavorite } from '../../actions/ramActions';

const CharacterCardContainer = styled.div`
    border: 1px solid #3c3c3c;
    border-radius: 6px;
    height: 340px;
    margin: 1rem;
    img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 6px 6px 0 0;
    }

`;

const CharacterCard = ({id, name, image, isFavorite}) => {
  const dispatch = useDispatch();

  const handleFavs = (id) => {
    dispatch(toggleFavorite(id))
  }

  return (
    <CharacterCardContainer onClick={() => handleFavs(id)}>
        <img src={image} alt={id + " " + name } />
        <h4>{name} {isFavorite ? "❤️" : " 🖤"}</h4>
        
    </CharacterCardContainer>
  )
}

export default CharacterCard