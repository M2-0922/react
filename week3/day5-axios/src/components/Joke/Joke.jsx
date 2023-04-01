import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, Alert } from 'reactstrap';

const Joke = () => {
  const [joke, setJoke] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    if (category !== '') {
      fetchJokeByCategory();
    } 
    else {
      fetchJoke();
    }
  }, [category]);

  const fetchJokeByCategory = async () => {
    try {
        if (category !== 'Any'){
        const response = await axios.get(
            `https://v2.jokeapi.dev/joke/${category}?type=single`
            );
            setJoke(response.data);        
        } else {
            const response = await axios.get(
                `https://v2.jokeapi.dev/joke/Any?type=single`
                );
                setJoke(response.data);        
            }
    } catch (error) {
      console.log(`Error while fetching: ${error}`);
    }
  };

  const fetchJoke = async () => {
    try {
    const response = await axios.get(
        'https://v2.jokeapi.dev/joke/Any?type=single'
    );
    setJoke(response.data);
    } catch (error) {
    console.log(`Error while fetching: ${error}`);
    }
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container>
      <h1>Random Joke</h1>
      <Alert color='warning'>{joke.joke}</Alert>
      {joke.category && (
        <Alert color='warning'>Category: {joke.category}</Alert>
      )}
      <div>
        <label>Filter by category: </label>
        <select value={category} onChange={handleCategoryChange}>
          <option value=''>Any</option>
          <option value='Programming'>Programming</option>
          <option value='Misc'>Misc</option>
          <option value='Dark'>Dark</option>
          <option value='Pun'>Pun</option>
          <option value='Spooky'>Spooky</option>
          <option value='Christmas'>Christmas</option>
        </select>
      </div>
      <Button color='warning' onClick={fetchJokeByCategory}>
        Get a new Joke
      </Button>
    </Container>
  );
};

export default Joke;






// OG
// import React, { useState } from 'react'
// import axios from "axios";
// import {
//     Container,
//     Button,
//     Alert
// } from "reactstrap";

// const Joke = () => {
//     const [joke, setJoke] = useState('');

//     const fetchJoke = async () => {
//         try {
//             const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
//             setJoke(response.data);
//         } catch (error) {
//             console.log(`Error while fetching: ${error}`);
//         }
//     }

//   return (
//     <Container>
//         <h1>Random Joke</h1>
//         <Alert color='warning'>{joke.joke}</Alert>
//         <Alert color='warning'>Category: {joke.category}</Alert>
//         <Button color='warning' onClick={fetchJoke}>Get a new Joke</Button>
//     </Container>
//   )
// }

// export default Joke