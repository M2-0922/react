import React, { useEffect } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux";
import { fetchCharacterData } from '../../actions/ramActions';
import { useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const characters = useSelector(state => state.ram.characters);
  useEffect(() => {
    let response = axios.get("https://rickandmortyapi.com/api/character");
    response.then(data => {
        dispatch(fetchCharacterData(data.data.results))
    })
  }, [dispatch])


  return (
    <div>
      {
        characters.map(character => {
          return (<div key={character.id}>{character.name}</div>)
        })
      }
    </div>
  )
}

export default Home