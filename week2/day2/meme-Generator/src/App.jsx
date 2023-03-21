import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import Header from './components/Header/Header';
import Meme from './components/Meme/Meme';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prev) => (!prev));
  }

  return (
    <div className="App">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Meme darkMode={darkMode}/>
    </div>
  )
}

export default App
