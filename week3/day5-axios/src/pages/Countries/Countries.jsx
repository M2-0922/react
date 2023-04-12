import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  ListGroup,
  ListGroupItem,
  Input,
} from "reactstrap";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.log(`Error while fetching countries: ${error}`);
      }
    };
    fetchCountries();
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filteredResult = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(keyword)
    );
    setFilteredCountries(filteredResult);
  };

  return (
    <Container>
      <h1>Countries</h1>
      <Input
        type="text"
        placeholder="Search by name"
        onChange={handleSearch}
      />
      <ListGroup>
        {filteredCountries.map((country) => {
          return (
            <ListGroupItem key={country.cca3}>
              {country.name.common} {country.flag} - {country.capital}
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </Container>
  );
};

export default Countries;
