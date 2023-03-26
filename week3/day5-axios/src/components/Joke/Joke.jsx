import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from "axios";
import {
    Container,
    Button,
    Alert,
} from "reactstrap";

const Joke = () => {
    const [joke, setJoke] = useState('');
    const [category, setCategory] = useState('');

    const options = [
        { value: 'Programming', label: 'Programming'},
        { value: 'Dark', label: 'Dark'},
        { value: 'Pun', label: 'Pun'},
        // { value: 'Misk', label: 'Misk'}, no existing
        // { value: 'Spooky', label: 'Spooky'}, no existing
        // { value: 'Christmas', label: 'Christmas'} no existing
    ];

    const handleChange = (e) => {
        // console.log(e.value);
        setCategory(e.value);
    }

    const fetchJoke = async () => {
        try {
            if(category === '') {
                const response = await axios.get("https://v2.jokeapi.dev/joke/Any?type=single");
                setJoke(response.data);
            } else {
                const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}?type=single`);
                setJoke(response.data);
            }
        } catch (error) {
            console.log(`Error while fetching: ${error}`);
        }
    }

  return (
    <Container>
        <h1>Random Joke</h1>
        <Alert color='warning'>{joke.joke}</Alert>
        <Alert color='warning'>Category: {joke.category}</Alert>
        {/* how use reactstrap Input component for react Select component? */}
        <Select 
            options={options}
            onChange={(value) => handleChange(value)} 
        />
        <Button color='warning' onClick={fetchJoke}>Get a new Joke</Button>
    </Container>
  )
}

export default Joke