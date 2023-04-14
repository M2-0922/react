import { useState } from 'react'
import './App.css';
import Lab1 from './components/Lab1/Lab1';
import Lab2 from './components/Lab2/Lab2';
import Lab3 from './components/Lab3/Lab3';
import Lab4 from './components/Lab4/Lab4';

function App() {
  return (
    <div className="App">
      <h3>Lab Question 1</h3>
      <Lab1 />
      <h3>Lab Question 2</h3>
      <Lab2 />
      <h3>Lab Question 3</h3>
      <Lab3 />
      <h3>Lab Question 4</h3>
      <Lab4 />
    </div>
  )
}

export default App
