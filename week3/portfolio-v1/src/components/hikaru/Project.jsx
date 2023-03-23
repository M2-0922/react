import React, {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'

const projectContainer = styled.h2`
background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};

    /* Project that i has been done */


    position: absolute;
    width: 458px;
    height: 119px;
    left: 154px;
    top: 1597.51px;
    
    /* Heading/H2 */
    
    font-family: 'Sora';
    font-style: normal;
    font-weight: 700;
    font-size: 56px;
    line-height: 72px;
    /* or 129% */
    
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: #FFFFFF;
`

const Project = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <projectContainer theme={theme}>
            <h2>Project that i <br></br>has been <span style={{ color: '#3BF686' }}>done</span></h2>
        </projectContainer>
    )
}

export default Project;