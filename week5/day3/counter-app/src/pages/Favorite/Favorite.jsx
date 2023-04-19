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

const TitleSec = styled.div`
  h2{
    text-align: start;
    font-size: 43px;
  }
  border-bottom: 2px solid white;
  margin: 24px 0;
`;

const LocationSec = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteCharacters = favorites.filter((character) => character.isFavorite);
  // console.log(favoriteCharacters);
  // check why its not recall the favoriteCharacters.
  const favorites_2 = JSON.parse(localStorage.getItem("favoriteLocations")) || [];
  const favoriteLocations = favorites_2.filter((location) => location.isFavorite);
  

  return (
    <FavoriteContainer>
      <TitleSec>
        <h2>Characters</h2>
      </TitleSec>
      <FavoriteList >
      {
        favoriteCharacters.map(character => {
          return <CharacterCard key={character.id} {...character} />
        })
      }
      </FavoriteList>
      <TitleSec>
        <h2>Locations</h2>
      </TitleSec>
      <LocationSec >
      {
        favoriteLocations.map(location => {
          return <LocationCard key={location.id} {...location} />
        })
      }
      </LocationSec>
    </FavoriteContainer>
  )
}

export default Favorite