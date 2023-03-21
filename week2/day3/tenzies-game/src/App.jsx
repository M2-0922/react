import { useState } from 'react';
import { nanoid } from 'nanoid';
import './App.css';
import Die from './components/Die/Die';
import styled from 'styled-components';
import Confetti from 'react-confetti';

function App() {

  const [dice, setDice] = useState(createNewDice());
  const [tenzie, setTenzie] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const allHeld = dice.every(die => die.isHeld);

    const firstvalue = dice[0].value;
    const allSameValue = dice.every(die => die.value === firstvalue);

    if(allHeld && allSameValue) setTenzie(true);
  },[dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  }

  function createNewDice() {
    const newDice = [];
    for(let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }
    return newDice;
  }

  function rollDice() {
    if(!tenzie) {
      setDice(prevDice => prevDice.map(die => {
        return die.isHeld ? die : generateNewDie()
      }))

      setCount(prev => prev - 1);
    }
    setTenzie(false);
    setDice(createNewDice());
  }

  function holdDie(id) {
    setDice(prevDice => {
      return prevDice.map((die) => {
        return die.id === id ? {...die, isHeld:!die.isHeld} : die
      })
    })
  }

  console.log(createNewDice());

  const diceElements = dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDie={() => holdDie(die.id)} />);
  console.log(diceElements);

  const CustomMain = styled.main`
    background-color: #F5F5F5;
    height: 400px;
    max-width: 800px;
    boeder-radius: 6px;
    padding: 20px;
    display: flex;
    text-align: center;
    flex-direction: column;
    // justify-content: center:
  `;

  const Title = styled.h1`
    font-size: 40px;
  `;

  const Paragraph = styled.p`
    font-weight: 400;
  `;

  const WrapperDice = styled.div`
    display: grid;
    grid-template: auto auto / repeat(5, 1fr);
    gap: 24px;
    // margin-bottom: 40px;
  `;

  const CustomButton = styled.button`
    height: 50px;
    min-width: 100px;
    border: none;
    border-radius: 6px;
    background-color: #5035FF;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
  `;

  const CustomButtonTransparent = styled(CustomButton)`
    background-color: transparent;
    border: 2px solid 
  `;

  return (
    <div className="App">
      { tenzie && <Confetti /> }
      <CustomMain>
        <Title>Tenzies</Title>
        <Paragraph>Roll until all dice ate same!</Paragraph>
        <WrapperDice>
          {diceElements}
        </WrapperDice>
        <CustomButton onClick={rollDice}>{tenzie ? "New Game" : "Roll"}</CustomButton>
      </CustomMain>
    </div>
  )
}

export default App
