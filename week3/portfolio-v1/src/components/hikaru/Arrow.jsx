
import React, {useContext} from 'react'
import ThemeContext from '../../context/ThemeContext'
import styled from 'styled-components'
import Vector from '../../assets/Vector.png'
import Vector1 from '../../assets/VectorLeft.png'
import Vector2 from '../../assets/VectorRight.png'

const arrowContainer = styled.div`
position: relative;
`

const Vector = styled.img`
position: absolute;
left: 100.8%;
right: -73.32%;
top: 13.57%;
bottom: -13.42%;

background: linear-gradient(187.05deg, #FBFBFB 5.51%, rgba(251, 251, 251, 0) 114.55%);
transform: rotate(85deg);
`
// const Vector1 = styled.img`

// position: absolute;
// left: 105.57%;
// right: -22.79%;
// top: 68.44%;
// bottom: 1.4%;

// background: #FBFBFB;
// transform: rotate(85deg);
// `

// const Vector2 = styled.img`
// position: absolute;
// left: 104.54%;
// right: -33.66%;
// top: 56.28%;
// bottom: 38.07%;

// background: #FBFBFB;
// transform: rotate(85deg);
// `





const Arrow = () => {
    const { theme } = useContext(ThemeContext);
  return (
    <arrowContainer>
        <img src={Vector}/>
        <img src={Vector1}/>
        <img src={Vector2}/>
    </arrowContainer>
    
  );
}

export default Arrow;
