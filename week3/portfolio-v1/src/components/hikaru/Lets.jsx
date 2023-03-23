import React, {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'

const letsContainer = styled.h4`
background-color: ${props => props.theme === "light" ? "#fff" : "#333"};
    color: ${props => props.theme === "light" ? "#333" : "#fff"};
/* Lets connect */


position: absolute;
width: 197px;
height: 72px;
left: 151px;
top: 1767px;

/* Heading/H4 */

font-family: 'Sora';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 72px;
/* identical to box height, or 257% */

letter-spacing: 1px;

color: #FBFBFB;
`
const Lets = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <letsContainer theme={theme}>
            <h4>Lets connect</h4>
        </letsContainer>
    )
}

export default Lets;