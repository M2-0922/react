import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Container, Button, Alert } from "reactstrap";

const Btn = styled.button`
  background-color: ${(props) => (props.active ? "orange" : "black")};
  cursor: pointer;
  margin: 10px;
  padding: 5px 8px;
  font-size: 18px;
  font: white;
  border-color: white;

  border-radius: 10px;
  color: white;
  &:hover {
    background-color: darkgray;
`;
const CreateBtn = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 5px 8px;
  font-size: 18px;
  border-radius: 10px;
  border-color: white;
  color: white;

  background: none;
  &:hover {
    background-color: darkgray;
`;
const CategoryP = styled.div`
  margin: 0px 10px;
  font-size: 20px;
`;
const JokeP = styled.div`
  margin: 0px 10px;
  font-size: 20px;
  min-height: 100px;
`;

const Joke = () => {
  const categories = [
    "Any",
    "Misc",
    "Programming",
    "Dark",
    "Pun",
    // "Spooky",
    // "Christmas",
  ];

  const [category, setCategory] = useState("any");

  const categoryBtn = categories.map((categoryInfo) => (
    <Btn
      active={categoryInfo === category}
      onClick={() => setCategory(categoryInfo)}
    >
      {categoryInfo}
    </Btn>
  ));
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        `https://v2.jokeapi.dev/joke/${category}?type=single`
      );
      setJoke(response.data);
    } catch (error) {
      console.log(`Error while fetching: ${error}`);
    }
  };

  useEffect(() => {
    console.log("ddd");
    fetchJoke();
  }, [category]);

  return (
    <Container>
      <h1>Random Joke</h1>
      {categoryBtn}
      <CategoryP color="warning">Category: {joke.category}</CategoryP>
      <CreateBtn onClick={fetchJoke}>Get a new Joke</CreateBtn>

      <JokeP color="warning">{joke.joke}</JokeP>
    </Container>
  );
};

export default Joke;
