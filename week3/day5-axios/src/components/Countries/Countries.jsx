import React, { useState, useEffect } from 'react'
import axios from "axios";
import { 
    Container,
    List,
    ListItem,
    Input
} from "@chakra-ui/react";


const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);

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
    }, [])

    const searchCountries = (text) => {
        let matches = countries.filter((country) => {
            const regex = new RegExp(`${text}`, "gi");
            return country.name.common.match(regex);
        });
        setCountryMatch(matches);
    };

    return (
    <Container>
        <h1 style={{fontWeight: 'bold'}}>Countries</h1>
        <Input 
            placeholder='Basic usage' 
            onChange={(e) => searchCountries(e.target.value)}
            />
        <List>
            {countryMatch && 
                countryMatch.map((country) => (
                    <ListItem key={country.cca3}>
                        {country.name.common} {country.flag} - {country.capital}
                    </ListItem>
                ))
            //     countries.map((country) => {
            //         return <ListItem key={country.cca3}>{country.name.common} {country.flag} - {country.capital}</ListItem>
            //     })
            }
        </List>
    </Container>
    )
}

export default Countries;