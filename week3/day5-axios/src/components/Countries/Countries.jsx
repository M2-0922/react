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
  const [filterString, setFilterString] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

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

  useEffect(() => {
    setFilteredCountries(
        countries.filter(
            country => {
                const regex = new RegExp(`^${filterString}`, 'gi')
                return regex.test(country.name.common);
            }
        )
    )
  }, [countries, filterString])

  return (
    <Container>
        <h1>Countries</h1>
        <ListGroup>
            <Label for="search">Search Country: </Label>
            <Input type='text' onChange={(event) => setFilterString(event.target.value)} value={filterString} id="search"/>
            {
                filteredCountries.map((country) => {
                    return <ListGroupItem key={country.cca3}>{country.name.common} {country.flag} - {country.capital}</ListGroupItem>
                })
            }
        </ListGroup>
    </Container>
  )
}

export default Countries