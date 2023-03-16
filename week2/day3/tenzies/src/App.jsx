import { useState, useEffect } from 'react'
import './App.css'
import Die from "./components/Die/Die";
import { nanoid } from "nanoid"
import styled from "styled-components";
import Confetti from "confetti-react";

function App() {
  const [dice, setDice] = useState(createNewDice());
  const [tenzie, setTenzie] = useState(false);
  const [count, setCount] = useState(10);

  useEffect(() => {
    // if all die's are green all held will be true;
    const allHeld = dice.every(die => die.isHeld);

    const firstValue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstValue);
    
    if(allHeld && allSameValue) setTenzie(true)
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function createNewDice(){
    const newDice = [];
    for(let i = 0; i < 10; i++){
      newDice.push(generateNewDie())
    }
    return newDice
  }

  function rollDice() {
    if(!tenzie){
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))

      // setCount(prev => prev - 1);
    }else{
      setTenzie(false);
      setDice(createNewDice())
    }
  }

  // function sum(a, b) { //function declaration is hoisted
  //   return a + b
  // }
  // const sum = (a,b) => a + b; // function expressions are not hoisted

  function holdDie(id) {
    // setDice(prevDice => {
    //   return prevDice.map(die => {
    //     return die.id === id ? {...die, isHeld: !die.isHeld} : die
    //   })
    // })

    setDice(prevDice => (prevDice.map((die) => 
      die.id === id 
        ? {...die, isHeld: !die.isHeld} 
        : die
        )
      )
    )
  }

  // function blabla(){
  //   // function declaration
  // }

  // const blabla2 = function(){
  //   // function expression
  // }

  const diceElements = 
    dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDie(die.id)} />)
    // [{value: "", id: "", isHeld: ""}, {value: "", id: "", isHeld: ""}, {value: "", id: "", isHeld: ""},{value: "", id: "", isHeld: ""}]
    // [<Die key={"asdkakdaksd"} value="1" isHeld="false" />, <Die key={"asdkakdaksd"} value="1" isHeld="false" />, <Die key={"asdkakdaksd"} value="1" isHeld="false" />, <Die />, <Die />, ...]


  const CustomMain = styled.main`
    background-color: #F5F5F5;
    height: 400px;
    max-width: 800px;
    border-radius: 24px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
  `;

  const Title = styled.h1`
    font-size: 40px;
  `;

  const Paragraph = styled.p`
    font-weight: 400;
    margin-top: 0;
    text-align: center;
    padding: 0 24px;
  `;

  const WrapperDice = styled.div`
      display: grid;
      grid-template: auto auto / repeat(5, 1fr);
      gap: 24px;
      // margin-bottom: 40px;
  `;

  const CustomButton = styled.button`
    height: 50px;
    width: auto;
    border: none;
    border-radius: 6px;
    background-color: #5035FF;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0 24px;
  `;

  // const CustomButtonTransparent = styled(CustomButton)`
  //   background-color: transparent;
  //   border: 2px solid #5035FF;
  //   color: #5035FF;
  // `;

  return (
    <div className="App">
      { tenzie && <Confetti /> }
      <CustomMain>
        <Title>Tenzies</Title>
        <Paragraph >Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</Paragraph>
        <WrapperDice >
          {diceElements}
        </WrapperDice>
        <CustomButton onClick={rollDice}>{tenzie ? "New Game" : "Roll"}</CustomButton>
        {/* <CustomButtonTransparent >asdasd</CustomButtonTransparent> */}
      </CustomMain>
    </div>
  )
}

export default App
