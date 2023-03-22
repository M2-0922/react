import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card/Card"

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  margin: 20px 0;
  button{
    margin: 0 6px;
    padding: 6px 8px;
    border:none;
    border-radius: 4px;
    cursor: pointer;
    &:hover{
      background-color: #000;
      color: #fff;
    }
  }
`;

const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 12px;
  padding: 0 24px;
  justify-items: center;
`;

const PaginationButton = styled.button`
  background-color: ${props => props.active ? "#000" : "#fff"};
  color: ${props => props.active ? "#fff" : "#000"};
`;

const CharacterPage = () => {
  const [data, setData] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageInformation, setPageInformation] = useState(1);

  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageInformation}`)
    .then(res => res.json())
    .then(data => {
      setData(data);
      setCharacters(data.results)
    })
  }, [pageInformation]);

  useEffect(() => {
      if(characters.length !== 0) {
        setLoading(false);
      }
  }, [characters]);

  const createPagination = () => {
    const pagination = [];
    const lengthOfCharacters = data.count;
    const numberOfPages = Math.ceil(lengthOfCharacters / 10);

    for(let i = 1; i <= numberOfPages; i++){
      pagination.push(i);
    }

    // [1,2,3,4,5,6,7,8,9]
    return pagination;
  }


  const displayCharacters = characters.map((character, index) => (<Card key={index} id={index + 1} character={character} />))

  return (
    <div>
      {
        loading 
        ? 
        <h1>Loading..</h1> 
        : 
        <div>
          <WrapperContainer>{displayCharacters}</WrapperContainer>
          <Pagination>
            <button onClick={() => setPageInformation(prevPage => prevPage > 1 ? prevPage - 1 : prevPage)}>Prev</button>
            {
              createPagination().map((page, index) => (
                <PaginationButton active={page === pageInformation} key={index} onClick={() => setPageInformation(page)}>{page}</PaginationButton>
              ))
            }
            <button onClick={() => setPageInformation(prevPage => prevPage < createPagination().length ? prevPage + 1 : prevPage)}>Next</button>
          </Pagination>
        </div>
      }
    </div>
  )
}

export default CharacterPage