import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux";
import { fetchCharacterDataAsync } from '../../actions/ramActions';
import { useSelector } from "react-redux";
import CharacterCard from '../../components/CharacterCard/CharacterCard';

import styled from 'styled-components';

const HomeContainer = styled.div`
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.ram.characters);
  const isFetching = useSelector(state => state.ram.isFetching);

  useEffect(() => {
    if(characters.length > 0) return;
    dispatch(fetchCharacterDataAsync());

  }, [dispatch])

  return (
    <HomeContainer>
      {
        isFetching && <div>Loading...</div>
      }
      {
        characters.map(character => {
          return (<CharacterCard key={character.id} {...character} /> )
        })
      }
    </HomeContainer>
  )
}

export default Home