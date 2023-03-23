import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'
import { FiInstagram, FiTwitter, FiFacebook  } from 'react-icons/fi';

const ConnectContainer = styled.div`
    h4{
        font-size: 28px;
        margin-bottom: 1rem;
    }
    ul{
        display: flex;
        list-style: none;
        li{
            a {
                color: ${props => props.theme === 'light' ? '#333' : '#fff'};
                padding-right: 1rem;
                svg{
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }
`;

const Connect = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <ConnectContainer theme={theme}>
            <h4>Lets connect</h4>
                <ul>
                    <li><a href={props.instagramLink}><FiInstagram /></a></li>
                    <li><a href={props.twitterLink}><FiTwitter /></a></li>
                    <li><a href={props.facebookLink}><FiFacebook /></a></li>
                </ul>
        </ConnectContainer>
    )
}

export default Connect