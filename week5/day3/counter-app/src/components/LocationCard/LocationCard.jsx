import React from 'react'
import styled from 'styled-components'
import { useDispatch } from "react-redux";
import { toggleFavoriteLocation } from '../../actions/ramActions';


const CustomCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #3c3c3c;
    padding: 1rem;
    border-radius: 6px;
    text-align: start;
`;

const LocationCard = ({id, name, type, dimention, residents, isFavoriteLocation}) => {
  const dispatch = useDispatch();

  const handleFavs = (id) => {
    dispatch(toggleFavoriteLocation(id))
  }
  return (
    <CustomCardContainer onClick={() => handleFavs(id)}>
        <h3>{name}</h3>
        <p>Type: {type}</p>
        <p>Dimension: {dimention}</p>
        <p>{residents.length} people lives here</p>
        <h4>{name} - {isFavoriteLocation ? " 👍🏼" : " 🤍"}</h4>
    </CustomCardContainer>
  )
}

export default LocationCard

// const CharacterCard = ({ id, name, status, image, isFavorite }) => {
//   const dispatch = useDispatch();

//   const handleFavs = (id) => {
//     dispatch(toggleFavorite(id))
//   }


//   return (
//     <CustomCardContainer onClick={() => handleFavs(id)}>
//         <img src={image} alt={id + "-" + name} />
//         <h4>{name} - {isFavorite ? " 👍🏼" : " 🤍"}</h4>
//         <p>{status}</p>
//     </CustomCardContainer>
//   )
// }

// export default CharacterCard