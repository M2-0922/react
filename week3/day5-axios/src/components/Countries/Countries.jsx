import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container, ListGroup, ListGroupItem } from "reactstrap";
import styled from "styled-components";

const Input = styled.input`
  height: 25px;
  width: 250px;
  padding: 5px 10px;
  margin-left: 15px;
  font-size: 16px;
`;

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchKey, setSearchKey] = useState([]);
  const [showData, setShowData] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setShowData(countries);
      } catch (error) {
        console.log(`Error while fetching api: ${error}`);
      }
    };
    console.log("koko");
    fetchCountries();
    console.log(countries);
  }, []);

  useEffect(() => {
    setShowData(searchKey);
  }, [searchKey]);

  const handleSearch = () => {
    let keyWord = ref.current.value.toLowerCase();
    setSearchKey(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(keyWord)
      )
    );
  };

  return (
    <Container>
      <h1>Countries</h1>
      <Input
        type="text"
        placeholder="Search..."
        ref={ref}
        onChange={() => handleSearch()}
      />

      <ListGroup>
        {showData.map((country) => {
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
