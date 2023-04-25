import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharactersData, fetchLocationData } from "../../actions/ramActions";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import LocationCard from "../../components/LocationCard/LocationCard";
import styled from "styled-components";

const HomeContainer = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  button {
    width: 200px;
    margin: 20px 0;
    height: 32px;
  }
`;

const CharacterSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const LocationSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const TitleSection = styled.div`
  h2{
    text-align: start;
    font-size: 48px;
  }
  border-bottom: 2px solid white;
  margin: 24px 0;
`;

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.ram.characters);
  const locations = useSelector((state) => state.ram.locations);

  useEffect(() => {
    if (characters.length === 0) {
      dispatch(fetchCharactersData());
    }

    if(locations.length === 0){
      dispatch(fetchLocationData());
    }
    
  }, [dispatch]);

  return (
    <HomeContainer>
      <TitleSection>
        <h2>Characters</h2>
      </TitleSection>
      <CharacterSection>
        {showMore
          ? characters.slice(0, 12).map((character) => {
              return (
                <CharacterCard
                  key={character.id}
                  {...character}
                ></CharacterCard>
              );
            })
          : characters.slice(0, 6).map((character) => {
              return (
                <CharacterCard
                  key={character.id}
                  {...character}
                ></CharacterCard>
              );
            })}
      </CharacterSection>
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? "Show Less" : "Show more"}
      </button>
      <TitleSection>
        <h2>Locations</h2>
      </TitleSection>
      <LocationSection>
        { locations.map(location => {
          return (<LocationCard key={location.id} {...location}></LocationCard>)
        })}
      </LocationSection>
    </HomeContainer>
  );
};

export default Home;
