import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavoriteLocation } from '../../actions/ramActions'
import styled from 'styled-components'

const CustomCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #3c3c3c;
    padding: 1rem;
    border-radius: 6px;
    text-align: start;
`;

const LocationCard = ({id, name, type, dimention, residents, isFavorite}) => {
  const dispatch = useDispatch();

  const handleFavs = (id) => {
    dispatch(toggleFavoriteLocation(id));
  }

  return (
    <CustomCardContainer onClick={() => handleFavs(id)}>
      <h4>{name} - {isFavorite ? "  👍🏼" : " 🤍"}</h4>
      <p>Type: {type}</p>
      <p>Dimention: {dimention}</p>
      <p>{residents.length} people lives here</p>
    </CustomCardContainer>
  )
}

export default LocationCard