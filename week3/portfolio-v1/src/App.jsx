import { useState, useEffect } from "react"
import './App.css'
import ThemeContext from "./context/ThemeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav"
import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Snippet from "./pages/Snippet/Snippet";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/portfolio" element={<Portfolio />} /> 
          <Route path="/snippet" element={<Snippet />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
