import React, { useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #ccc;
    padding: 24px 48px;
`;

const Paragraph = styled.p`
    color: ${props => props.color};
`;

const CharacterProfile = () => {
    const [character, setCharacter] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(data => {
            setCharacter(data);
        })
    }, [])

    useEffect(() => {
        if(character.length !== 0){
            setLoading(false);
        }
    }, [character])

  return (
    <Wrapper>
        {
        loading 
        ? <h1>Loading..</h1>
        :
        <div>
            <Link to="/character">go back</Link>
            {/* <a href="/character">go back</a> */}
            <h1>Character Profile</h1>
            <h2>Full Name: {character.name}</h2>
            <Paragraph>Height: {character.height}</Paragraph>
            <Paragraph>Mass: {character.mass}</Paragraph>
            <Paragraph color={character.hair_color}>Hair Color: {character.hair_color}</Paragraph>
            <Paragraph color={character.skin_color}>Skin Color: {character.skin_color}</Paragraph>
        </div>
        }
    </Wrapper>
  )
}

export default CharacterProfile