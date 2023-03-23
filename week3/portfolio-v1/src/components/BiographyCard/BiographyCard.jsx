import React, { useContext } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'


const BiographyCardContainer = styled.div`
    background-color: ${props => props.theme === 'light' ? '#fff' : '#323443'};
    color: ${props => props.theme === 'light' ? '#333' : '#fff'};
    border-radius: 12px;
    border: ${props => props.theme === 'light' ? '0.25rem solid #333' : 'none'};
    margin: 0 0.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 1rem 1rem;
    h6{
        font-size: 16px;
        margin: 50px 0 0.5rem 0;
    }
    p{
        font-size: 14px;
        color: #EFEDE8;
        line-height: 2;
    }
`;

const IconWrapper = styled.div`
    background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 0.05%, #4CA9FF 95.52%)" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%)"};;
    border-radius: 50%;
    width: 72px;
    height: 72px;
    position: absolute;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Icon = styled.div`
    background-color: ${props => props.theme === 'light' ? '#fff' : '#323443'};
    color: ${props => props.theme === 'light' ? '#333' : '#fff'};
    border: none;
    width: 95%;
    height: 95%;
    border-radius: 50%;
    display: flex;
    align-items: center;
    svg {
        margin: auto;
        width: 50%;
        height: 50%;
    }
`;

const BiographyCard = (props) => {
    const { theme } = useContext(ThemeContext);
    return (
        <BiographyCardContainer theme={theme}>
            <IconWrapper><Icon theme={theme}>{props.icon}</Icon></IconWrapper>
            <h6>{props.title}</h6>
            <p>{props.content}</p>
        </BiographyCardContainer>
    )
}

export default BiographyCard