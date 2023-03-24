import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext';
import Hero from '../../components/Hero/Hero';
import Bio from '../../components/BioCard/Bio';
import Social from '../../components/Social/Social';
import AvatarCard from '../../components/AvatarCard/AvatarCard';


const Wrapper = styled.div`
    display:flex;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    padding: 1rem 2rem;
`;

const BioWrapper = styled.div`
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    display:flex;
    align-items:flex-start;
    padding: 20px 20px;
    gap: 30px; 
    
`;


const Home = () => {
    const { theme } = useContext(ThemeContext);
    return (
    <>
    <Wrapper theme={theme}>
        <Hero content={"Hola! Im Santiago, a special human with some ability to love learning and working on teamwork. "} />  
    </Wrapper>
    <BioWrapper theme={theme}>
      <AvatarCard/>
      <Bio/>
      <Social/>
    </BioWrapper>
    </>
  )
}

export default Home