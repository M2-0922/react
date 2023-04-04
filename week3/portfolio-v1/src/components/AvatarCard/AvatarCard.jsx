import React, {useContext} from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import avatarImage from "../../assets/avatar.svg"

const AvatarCardContainer = styled.div`
    width: 155px;
    height: 155px;
    border-radius: 50%;
    // border: 4px solid linear-gradient(219.79deg, #62D9FF 32.28%, #3BF686 101.32%);
    border: 4px solid #62D9FF;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const AvatarCard = () => {
    const {theme} = useContext(ThemeContext);
  return (
    <AvatarCardContainer theme={theme}>
        <img src={avatarImage} alt="" />
    </AvatarCardContainer>
  )
}

export default AvatarCard