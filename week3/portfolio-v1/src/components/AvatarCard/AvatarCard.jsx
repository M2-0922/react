import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import avatarImage from "../../assets/avatar.svg"
const AvatarCardContainer = styled.div`
    width: 155px;
    height: 155px;
    border-radius: 50%;
    border: 2px solid ${props => props.theme === "light" ? "#333" : "#fff" };
    display: flex;
    justify-content: center;
    align-items:center;
`;

const AvatarCard = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <AvatarCardContainer theme={theme}>
        <img src={avatarImage} alt="" />
    </AvatarCardContainer>
  )
}

export default AvatarCard