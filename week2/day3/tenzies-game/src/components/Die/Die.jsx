import React from 'react'
import styled from 'styled-components'

const Die = (props) => {

    // background-color: ${props => props.primary ? "pink" : "#FFFFFF"};
    const DieContainer = styled.div`
        background-color: ${props => props.primary ? "#59E391" : "#FFF"};
        height: 50px;
        width: 50px;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border-radius: 8px;
        box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15);
    `;

    const DieContent = styled.h2`
        font-size: 2rem;
    `;

  return (
    <DieContainer primary={props.isHeld} onClick={props.holdDie}>
        <DieContent>{props.value}</DieContent>
    </DieContainer>
  )
}

export default Die;