import React, { useState, useEffect } from 'react'
import axios from "axios";
import { 
    Container,
    ListGroup,
    ListGroupItem,
    Input,
    Label
} from "reactstrap"

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const searchInputValue = event => setInputValue(event.target.value);

    //Only first time onload
    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get("https://restcountries.com/v3.1/all");
                setCountries(response.data);
            } catch (error) {
                console.log(`Error while fetching api: ${error}`);
            }
        }
        fetchCountries();
    }, []);

    // check input value and api data
    useEffect(() => {
        setFiltered(
            countries.filter(country => {
                const regexValue = new RegExp(`^${inputValue}`, 'gi')
                return regexValue.test(country.name.common);
            })
        )
    }, [countries, inputValue]);

    return (
        <Container>
            <h1>Countries</h1>
            <ListGroup>
                <Label for="search">Search Country </Label>
                <Input type="text" id="search" onChange={searchInputValue} value={inputValue} />
                    {
                        filtered.map((country) => {
                            return <ListGroupItem key={country.cca3}>{country.name.common} {country.flag} - {country.capital}</ListGroupItem>
                        })
                    }
            </ListGroup>
        </Container>
    )
}

export default Countries