import React from 'react'
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import styled from 'styled-components';

const FavoriteContainer = styled.div`
  padding: 1rem 2rem;

`;

const FavoriteList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteCharacters = favorites.filter((character) => character.isFavorite);
  // console.log(favoriteCharacters);
  // check why its not recall the favoriteCharacters.

  return (
    <FavoriteContainer>
      <FavoriteList >
      {
        favoriteCharacters.map(character => {
          return <CharacterCard key={character.id} {...character} />
        })
      }
      </FavoriteList>
    </FavoriteContainer>
  )
}

export default Favorite