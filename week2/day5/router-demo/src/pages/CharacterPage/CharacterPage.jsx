import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Card from '../../components/Card/Card'

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
  const [data, setData] = useState([]) //get API data
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageInfo, setPageInfo] = useState(1)

  //get API data
  useEffect(() => {
    fetch(`https://swapi.dev/api/people/?page=${pageInfo}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      setData(data); //get all API data
      setCharacters(data.results); //get array of objects have information
    })
  }, [pageInfo]);

  // set loading display during render the data
  useEffect(() => {
    if(characters.length !== 0) {
      setLoading(false);
    }
  },[characters]);

  // create array about how many pages have 10 object there are 
  const createPagenation = () => {
    const pagination = [];
    const lengthOfCharacters = data.count;
    const numberOfPages = Math.ceil(lengthOfCharacters / 10);

    for(let i = 1; i <= numberOfPages; i++)  {
      pagination.push(i);
    }

    return pagination;
  }

  //function for display information on cards with Card component
  const displayCharacters = characters.map((character, index) => (
    // set props id as page Number and character as object of data
    (<Card key={index} id={index + 1} character={character} />)
  ));

  return (
    <div>
      {
        loading
        ?
        <h1>Loading...</h1>
        :
        <div>
          <WrapperContainer>{displayCharacters}</WrapperContainer>
          <Pagination>
            <button onClick={() => setPageInfo(prev => prev > 1 ? prev - 1 : prev)}>Prev</button>
            {
              createPagenation().map((page, index) => (
                <PaginationButton 
                  active={page === pageInfo} 
                  key={index} 
                  onClick={() => setPageInfo(page)}
                >
                  {page}
                </PaginationButton>
              ))
            }
            <button onClick={() => setPageInfo(prev => prev < createPagenation().length ? prev + 1 : prev)}>Next</button>
          </Pagination>
          
        </div>
      }
    </div>
  )
}

export default CharacterPage