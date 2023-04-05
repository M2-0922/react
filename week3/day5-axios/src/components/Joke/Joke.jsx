import React, { useState } from 'react'
import axios from "axios";
// import {
//     Container,
//     Button,
//     Alert
// } from "reactstrap";
import { 
    ChakraProvider, 
    Button,
    Alert
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";

const Joke = () => {
    const [joke, setJoke] = useState('');
    // const [category, setCategory] = useState('');
    const [query, setQuery] = useState('');

    const fetchJoke = async () => {
        try {
            const response = await axios.get(`https://v2.jokeapi.dev/joke/${query}?type=single`);
            setJoke(response.data);
        } catch (error) {
            console.log(`Error while fetching: ${error}`);
        }
    }

    return (
    <ChakraProvider>
        <div style={{paddingBottom: 30 + 'px'}}>
            <h1 style={{fontWeight: 'bold'}}>Random Joke</h1>
            <Select placeholder='Select option' onChange={(e) => setQuery(e.target.value)} chakraStyles={{
                container: (provided) => ({
                ...provided,
                width: "50%"})
                }}>
                <option value='misc'>Misc</option>
                <option value='programming'>Programming</option>
                <option value='dark'>Dark</option>
                <option value='pun'>Pun</option>
                <option value='spooky'>Spooky</option>
                <option value='christmas'>Christmas</option>
            </Select>
            <Alert color='warning' style={{width: 50 + '%'}}>{joke.joke}</Alert>
            <Alert color='warning' style={{width: 50 + '%'}}>Category: {joke.category}</Alert>
            <Button color='warning' onClick={fetchJoke}>Get a new Joke</Button>
        </div>
    </ChakraProvider>
    )
}

export default Joke