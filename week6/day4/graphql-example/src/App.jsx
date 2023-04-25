import './App.css'
import { useEffect } from 'react';
import { fetchCharacters, fetchLocations, fetchEpisodes } from './actions'
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fetchCharacters());
    dispacth(fetchLocations());
    dispacth(fetchEpisodes());
  }, [dispacth]);

  const characters = useSelector(state => state.characters);
  const locations = useSelector(state => state.locations);
  const episodes = useSelector(state => state.episodes);

  return (
    <>
      <h1>Characters:</h1>
      {characters.length !== 0 && 
      characters.map(character => {
        return (
          <div key={character.id}>
            <img src={character.image} alt={character.id + " " + character.name} />
            <h3>{character.name}</h3>
            <p>Status: {character.status}</p>
            { character.type && <p>Type: {character.type}</p> }
          </div>
        )
      })
      }

      <h1>Locations:</h1>
      {
        locations.length !== 0 &&
        locations.map(location => {
          return (
            <div key={location.id}>
              <h3>{location.name}</h3>
              <p>Dimension: {location.dimension}</p>
              <p>Residets: { location.residents.length } </p>
            </div>
          )
        })
      }

      <h1>Episodes: </h1>

      {
        episodes.length !== 0 &&
        episodes.map(episode => {
          return (
            <div key={episode.id}>
              <h3>{episode.name}</h3>
              <p>Air Date: {episode.air_date}</p>
              <p>Episode: {episode.episode}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
