import React, { useState, useEffect } from 'react'
import axios from "axios";
import {
    Container,
    Button,
    Alert,
    Input,
    Label
} from "reactstrap";

const Joke = () => {
    const [joke, setJoke] = useState('');
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState('');
    const searchSelectedValue = event => setCategory(event.target.value);

    //get a joke from api by key
    const fetchJoke = async () => {
        try {
            const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}?type=single`);
            setJoke(response.data);
        } catch (error) {
            console.log(`Error while fetching: ${error}`);
        }
    }

    //Only first time onload
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get("https://v2.jokeapi.dev/categories");
                setCategories(response.data.categories);
            } catch (error) {
                console.log(`Error while fetching api: ${error}`);
            }
        }
        fetchCategories();
    }, []);

    //set select pulldown
    useEffect(() => {
        setCategory(categories[0])}, [categories]
    );

    return (
        <Container>
            <h1>Random Joke</h1>
            <Label for="select">Category </Label>
            <Input type="select" id="select" onChange={searchSelectedValue}>
                {
                    categories.map(category => <option key={category} value={category}>{category}</option>)
                }
            </Input>
            <Alert color='warning'>{joke.joke}</Alert>
            <Alert color='warning'>Category: {joke.category}</Alert>
            <Button color='warning' onClick={fetchJoke}>Get a new Joke</Button>
        </Container>
    )
}

export default Joke