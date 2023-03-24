import React, { useState, useEffect } from 'react'
import axios from "axios";
import { 
    Container,
    ListGroup,
    ListGroupItem
} from "reactstrap"

const Countries = () => {
  const [countries, setCountries] = useState([]);

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

  return (
    <Container>
        <h1>Countries</h1>
        <ListGroup>
            {
                countries.map((country) => {
                    return <ListGroupItem key={country.cca3}>{country.name.common} {country.flag} - {country.capital}</ListGroupItem>
                })
            }
        </ListGroup>
    </Container>
  )
}

export default Countries