import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import './App.css'
import Home from "./pages/Home/Home"
import About from './pages/About/About'
import Contact from "./pages/Contact/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      {/* all components will sit here */}
    </ThemeContext.Provider>
  )
}

export default App
