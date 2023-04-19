import React from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import LocationCard from '../../components/LocationCard/LocationCard';
import styled from 'styled-components';

const FavoriteContainer = styled.div`
  padding: 1rem 2rem;

`;

const FavoriteList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const FavoriteLocationList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  div{
    display: flex;
    justify-content: center;
    background: palegoldenrod;
    color: #3e3e3e;
  }
`;

const HeadlineWrapper = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    padding: 2rem 0;
`



const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favoritesCharacter")) || [];
  const favoriteCharacters = favorites.filter((character) => character.isFavorite);
  // console.log(favoriteCharacters);
  // check why its not recall the favoriteCharacters.

  const favorites2 = JSON.parse(localStorage.getItem("favoritesLocation")) || [];
  const favoriteLocations = favorites2.filter((location) => location.isFavoriteLocation);
  console.log(favoriteLocations);

  return (
    <FavoriteContainer>
      <HeadlineWrapper>Favorite Characters</HeadlineWrapper>
      <FavoriteList >
      {
        favoriteCharacters.map(character => {
          return <CharacterCard key={character.id} {...character} />
        })
      }
      </FavoriteList>
      <HeadlineWrapper>Favorite Locations</HeadlineWrapper>
      <FavoriteLocationList >
      {
        favoriteLocations.map(location => {
          return <LocationCard key={location.id} {...location} />
        })
      }
      </FavoriteLocationList>
    </FavoriteContainer>
  )
}

export default Favorite