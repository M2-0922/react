import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux';
import { toggleFavoriteLocation } from '../../actions/ramActions';

const CustomCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #3c3c3c;
    padding: 1rem;
    border-radius: 6px;
    text-align: start;
`;



const LocationCard = ({name, type, dimention, residents}) => {

  const dispatch = useDispatch();

  return (
    <CustomCardContainer>
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Dimension: {dimention}</p>
        <p>{residents.length} people lives here</p>
    </CustomCardContainer>
  )
}

export default LocationCard;