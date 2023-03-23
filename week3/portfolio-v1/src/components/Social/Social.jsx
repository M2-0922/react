import React, { useContext } from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'
import { AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {TbBrandFacebook} from 'react-icons/tb';



const SocialContainer = styled.div`
    margin:0px;
    background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
    height: 155px;
    display: flex;
    flex-direction: column;
    
    h1{
        width: 197px;
        height:72px;
        font-family: 'Sora';
        font-style: normal;
        font-weight: 700;
        font-size: 28px;
        line-height: 72px;
        letter-spacing: 1px;
    }
`;

const RowWrapper = styled.div`
    display: flex;
    svg{
            width: 32px;
            height: 32px;
            margin-right:12px;
         
          

        }

`;

const Social = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    
        <SocialContainer theme={theme}>
               <h1>Lets connect</h1> 
                <RowWrapper>
                    <AiOutlineInstagram />
                    <AiOutlineTwitter />
                    <TbBrandFacebook />
                </RowWrapper>
        </SocialContainer>
  )
}

export default Social