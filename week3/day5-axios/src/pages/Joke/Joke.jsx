import React, { useState } from 'react'
import axios from "axios";
import {
    Container,
    Button,
    Alert
} from "reactstrap";

const Joke = () => {
    const [joke, setJoke] = useState('');
    const [category, setCategory] = useState('');

    const fetchJoke = async () => {
        try {
            const url = category === '' ? 'https://v2.jokeapi.dev/joke/Any?type=single' : `https://v2.jokeapi.dev/joke/${category}?type=single`;
            const response = await axios.get(url);
            setJoke(response.data);
          
        } catch (error) {
            console.log(`Error while fetching: ${error}`);
        }
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

  return (
    <Container>
        <h1>Random Joke</h1>
        <Alert color='warning'>{joke.joke}</Alert>
        <Alert color='warning'>Category: {joke.category}</Alert>
        <select value={category} onChange={handleCategoryChange}>
                <option value=''>Any</option>
                <option value='Programming'>Programming</option>
                <option value='Miscellaneous'>Miscellaneous</option>
                <option value='Dark'>Dark</option>
                <option value='Pun'>Pun</option>
                <option value='Spooky'>Spooky</option>
                <option value='Christmas'>Christmas</option>
            </select>
        <Button color='warning' onClick={fetchJoke}>Get a new Joke</Button>
    </Container>
  )
}

export default Joke