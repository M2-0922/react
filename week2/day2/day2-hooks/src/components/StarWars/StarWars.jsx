import React, { useState, useEffect } from 'react'

const StarWars = () => {
  const [starWarsData, setStarWarsData] = useState({});

  useEffect(() => {
    fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => {
      setStarWarsData(data);
    }) 
  }, [])

  return (
    <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    // <h1>{starWarsData}</h1>
  )
}

export default StarWars