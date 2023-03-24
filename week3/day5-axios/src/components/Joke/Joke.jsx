import React, { useState } from 'react'
import axios from "axios";
import {
    Container,
    Button,
    Alert
} from "reactstrap";

const Joke = () => {
    const [joke, setJoke] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
            setJoke(response.data);
        } catch (error) {
            console.log(`Error while fetching: ${error}`);
        }
    }

  return (
    <Container>
        <h1>Random Joke</h1>
        <Alert color='warning'>{joke.joke}</Alert>
        <Alert color='warning'>Category: {joke.category}</Alert>
        <Button color='warning' onClick={fetchJoke}>Get a new Joke</Button>
    </Container>
  )
}

export default Joke