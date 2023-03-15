import { useState } from 'react'
import './App.css'
import Die from "./components/Die/Die";
import { nanoid } from "nanoid"
function App() {
  
  const [dice, setDice] = useState(createNewDice());

  function generateNewDie () {
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

  console.log(createNewDice());

  const diceElements = 
    dice.map((die) => <Die key={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDie(die.id)} />)
    // [{value: "", id: "", isHeld: ""}, {value: "", id: "", isHeld: ""}, {value: "", id: "", isHeld: ""},{value: "", id: "", isHeld: ""}]
    // [<Die key={"asdkakdaksd"} value="1" isHeld="false" />, <Die key={"asdkakdaksd"} value="1" isHeld="false" />, <Die key={"asdkakdaksd"} value="1" isHeld="false" />, <Die />, <Die />, ...]

  return (
    <div className="App">
      {diceElements}
      {/* <Die value={dice[0].value} /> */}
    </div>
  )
}

export default App
