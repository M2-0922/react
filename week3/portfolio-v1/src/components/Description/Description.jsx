import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import ThemeContext from '../../context/ThemeContext'

const DescriptionContainer = styled.div`
    max-width: 500px;
    h4{
        font-size: 28px;
        margin-bottom: 1rem;
    }
    p{
        font-size: 18px;
        line-height: 2;
    }
    span{
        background: ${props => props.theme === "light" ? "linear-gradient(134.01deg, #333 0.05%, #4CA9FF 95.52%);" : "linear-gradient(134.01deg, #3BF686 40.75%, #4CA9FF 90.52%)"};
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`;

const Description = (props) => {
    const { theme } = useContext(ThemeContext);

    return (
        <DescriptionContainer theme={theme}>
            <h4>{props.title}</h4>
            <p>{props.content}</p>
        </DescriptionContainer>
    )
}

export default Description