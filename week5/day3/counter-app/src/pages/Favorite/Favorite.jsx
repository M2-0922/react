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

const TitleSection = styled.div`
  h2{
    text-align: start;
    font-size: 48px;
  }
  border-bottom: 2px solid white;
  margin: 24px 0;
`;

const Favorite = () => {
  const favoriteCharacters = JSON.parse(localStorage.getItem("favoriteCharacters")) || [];
  const favoriteLocations = JSON.parse(localStorage.getItem("favoriteLocations")) || [];
  const favoriteCharactersArray = favoriteCharacters.filter((character) => character.isFavorite);
  const favoriteLocationsArray = favoriteLocations.filter((location) => location.isFavorite);

  return (
    <FavoriteContainer>
      <TitleSection>
        <h2>Characters</h2>
      </TitleSection>
      <FavoriteList>
          {
            favoriteCharactersArray.map(character => {
              return <CharacterCard key={character.id} {...character} />
            })
          }
      </FavoriteList>
      <TitleSection>
        <h2>Locations</h2>
      </TitleSection>
      <FavoriteList>
          {
            favoriteLocationsArray.map(location => {
              return <LocationCard key={location.id} {...location} />
            })
          }
      </FavoriteList>
    </FavoriteContainer>
  )
}

export default Favorite