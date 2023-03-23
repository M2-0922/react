import React, { useContext } from 'react'
import styled from "styled-components"
import ThemeContext from '../../context/ThemeContext'
import reactIcon from '../../assets/reactIcon.png'
import tailwindIcon from '../../assets/tailwindIcon.png'
import rectangle from '../../assets/rectangle.png'
import starIcon from '../../assets/star.png'


const NextjsStarter = ({title, content, star}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <NextjsStarterContainer theme={theme}>
        <upper>
          <h4>{title}</h4>
          <p>{content}</p>
        </upper>
        <bottom>
          <div>
            <img src={tailwindIcon} alt=""/>
            <img src={rectangle} alt=""/>
            <img src={reactIcon} alt=""/>          
            <img src={rectangle} alt=""/>
          </div>
          <stars>
            <img src={starIcon} alt=""/>
            <p>{star}  Stars</p>
          </stars>
        </bottom>
    </NextjsStarterContainer>
  )
}

const NextjsStarterContainer = styled.div`
  width: 556px;
  height: 282px;
  background: linear-gradient(0deg, #323443, #323443), #EFF6FF;
  border-radius: 20px;
  font-style: normal;
  letter-spacing: 1px;
  padding-left: 2rem;

    h4{
      font-family: 'Sora', sans-serif;
      font-weight: 700;
      font-size: 28px;
      line-height: 72px;
      padding-top: 1.5rem;
    }
    p{
      font-family: 'Inter', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 32px;
    }

  bottom {
    display: flex;
    justify-content: space-between;
    div {
      position: relative;
      padding-top: 6rem;
      img:nth-child(1) {
        position: absolute;
        top: 6.2rem;
        left: 0.2rem;
      }
      img:nth-child(2) {
        position: absolute;
        left: 3.5rem;
      }
      img:nth-child(3) {
        position: absolute;
        top: 6.4rem;
        left: 3.6rem;
      }
    }
    stars{
      position: relative;
      width: 10rem;
      img {
        position: absolute;
        top: 6.8rem;
      }
      p {
        position: absolute;
        top: 6.4rem;
        left: 2rem;
      }
    }
  }
  `;

export default NextjsStarter