import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Meme from './components/Meme/Meme'

function App() {
  
  return (
    <div className="App">
      <Header />
      <Meme key={1} />
    </div>
  )
}

export default App
