import React from 'react'
import { useSelector } from "react-redux";
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import styled from 'styled-components';

const FavContainer = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;


const Favorite = () => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteCharacters = favorites.filter(
    (character) => character.isFavorite
  );

  // const characters = useSelector((state) => state.ram.characters);

  // const favoriteCharactersData = characters.filter((character) =>
  //   favoriteCharacters.find((fav) => fav.id === character.id)
  // );

  return (
    <FavContainer>
      {favoriteCharacters.map((character) => {
        return <CharacterCard key={character.id} {...character} />;
      })}
    </FavContainer>
  )
}

export default Favorite