import React, { useState, useEffect } from 'react'
import axios from "axios";
import { 
    Container,
    ListGroup,
    ListGroupItem
} from "reactstrap"
import SearchBox from '../SearchBox/SearchBox';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchField, setSearchField] = useState('');

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



    const onSearchChange = (event) => {
      
        setSearchField(event.target.value);
        console.log(event.target.value);

        const filteredCountries = countries.filter(country =>
            country.name.common.toLowerCase().includes(searchField.toLowerCase()))
     
            console.log(filteredCountries);
        }
  


  return (
    <Container>
        <h1>Countries</h1>
        <SearchBox searchChange={onSearchChange} />
        <ListGroup>
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